// I have done all the coding by myself and only copied the code
// that my professor provided to complete my workshops and assignments.
// Workshop 9 - Multi-Threading
// SecureData.cpp
// July 28, 2021 - Brody Neumann

#include <iostream>
#include <fstream>
#include <string>
#include <thread>
#include <functional>
#include "SecureData.h"

using namespace std;

namespace w9 {

	void converter(char* t, char key, int n, const Cryptor& c) {
		for (int i = 0; i < n; i++)
			t[i] = c(t[i], key);
	}

	SecureData::SecureData(const char* file, char key, ostream* pOfs)
	{
		ofs = pOfs;

		// open text file
		fstream input(file, std::ios::in);
		if (!input)
			throw string("\n***Failed to open file ") +
			string(file) + string(" ***\n");

		// copy from file into memory
		input.seekg(0, std::ios::end);
		nbytes = (int)input.tellg() + 1;

		text = new char[nbytes];

		input.seekg(ios::beg);
		int i = 0;
		input >> noskipws;
		while (input.good())
			input >> text[i++];
		text[nbytes - 1] = '\0';
		*ofs << "\n" << nbytes - 1 << " bytes copied from file "
			<< file << " into memory (null byte added)\n";
		encoded = false;

		// encode using key
		code(key);
		*ofs << "Data encrypted in memory\n";
	}

	SecureData::~SecureData() {
		delete[] text;
	}

	void SecureData::display(std::ostream& os) const {
		if (text && !encoded)
			os << text << std::endl;
		else if (encoded)
			throw std::string("\n***Data is encoded***\n");
		else
			throw std::string("\n***No data stored***\n");
	}

	void SecureData::code(char key)
	{
		const int numThreads = 4;
		const int partSize = nbytes / numThreads;
		std::thread threads[numThreads];

		for (int i = 0; i < numThreads; i++) {
			if (i + 1 < numThreads) {
				threads[i] = std::thread(std::bind(converter, text + (i * partSize), key, partSize, Cryptor()));
			}
			else threads[i] = std::thread(std::bind(converter, text + (i * partSize), key, nbytes - (i * partSize), Cryptor()));
		}
		for (int i = 0; i < numThreads; i++) threads[i].join();

		encoded = !encoded;
	}

	void SecureData::backup(const char* file) {
		if (!text)
			throw std::string("\n***No data stored***\n");
		else if (!encoded)
			throw std::string("\n***Data is not encoded***\n");
		else
		{
			std::ofstream ofile(file, std::ios::binary);
			if (!ofile) throw std::string("Could not open write file");

			ofile.write(text, nbytes);
			ofile.close();
		}
	}

	void SecureData::restore(const char* file, char key) {
		std::ifstream ifile(file, std::ios::binary);
		if (!ifile) throw std::string("Could not open reading file");

		ifile.seekg(0, ifile.end);
		nbytes = ifile.tellg();
		ifile.seekg(0, ifile.beg);

		if (text) {
			delete[] text;
			text = nullptr;
		}

		text = new char[nbytes];

		ifile.read(text, nbytes);

		*ofs << "\n" << nbytes << " bytes copied from binary file "
			<< file << " into memory.\n";

		encoded = true;

		// decode using key
		code(key);

		*ofs << "Data decrypted in memory\n\n";
	}

	std::ostream& operator<<(std::ostream& os, const SecureData& sd) {
		sd.display(os);
		return os;
	}
}
