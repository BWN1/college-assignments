//I have done all the coding by myself and only copied the code that my professor provided to complete my workshops and assignments.
// Workshop 7 - STL Algorithms
//July 18, 2021 - Brody Neumann
#include <iostream>
#include <iomanip>
#include <fstream>
#include <algorithm>
#include "SongCollection.h"

namespace sdds {
	size_t constexpr FILE_TEXT_TOKEN_LENGTH = 25;
	size_t constexpr FILE_NUM_TOKEN_LENGTH = 5;

	void SongCollection::removeSpaces(std::string& str)
	{
		str = str.substr(str.find_first_not_of(' '), str.length()); //left
		str = str.substr(0, str.find_last_not_of(' ') + 1); //right
	}

	SongCollection::SongCollection(std::string fname)
	{
		std::string temp;
		Song tempSong;
		std::fstream file(fname);
		if (!file) throw("");

		while (std::getline(file, temp)) {
			tempSong.m_title = temp.substr(0, FILE_TEXT_TOKEN_LENGTH);
			removeSpaces(tempSong.m_title);
			temp.erase(0, FILE_TEXT_TOKEN_LENGTH);

			tempSong.m_artist = temp.substr(0, FILE_TEXT_TOKEN_LENGTH);
			tempSong.m_artist = tempSong.m_artist.substr(tempSong.m_artist.find_first_not_of(' '), tempSong.m_artist.length());
			tempSong.m_artist = tempSong.m_artist.substr(0, tempSong.m_artist.find_last_not_of(' ') + 1);
			temp.erase(0, FILE_TEXT_TOKEN_LENGTH);

			tempSong.m_album = temp.substr(0, FILE_TEXT_TOKEN_LENGTH);
			tempSong.m_album = tempSong.m_album.substr(tempSong.m_album.find_first_not_of(' '), tempSong.m_album.length());
			tempSong.m_album = tempSong.m_album.substr(0, tempSong.m_album.find_last_not_of(' ') + 1);
			temp.erase(0, FILE_TEXT_TOKEN_LENGTH);

			tempSong.m_year = temp.substr(0, FILE_NUM_TOKEN_LENGTH);
			if (tempSong.m_year.find_first_not_of(' ') != std::string::npos)
				tempSong.m_year = tempSong.m_year.substr(tempSong.m_year.find_first_not_of(' '), tempSong.m_year.find_last_not_of(' ') + 1);
			temp.erase(0, FILE_NUM_TOKEN_LENGTH);

			tempSong.m_length = stoi(temp.substr(0, FILE_NUM_TOKEN_LENGTH));
			temp.erase(0, FILE_NUM_TOKEN_LENGTH);

			tempSong.m_price = stod(temp.substr(0, FILE_NUM_TOKEN_LENGTH));
			temp.erase();

			songs.push_back(tempSong);
		}
	}
	void SongCollection::display(std::ostream& out) const
	{
		std::for_each(songs.begin(), songs.end(), [&out](Song song) {
			out << song;
		});
	}
	std::ostream& operator<<(std::ostream& out, const Song& theSong)
	{
		size_t mins = theSong.m_length / 60;
		size_t secs = theSong.m_length % 60;

		out << "| " << std::setw(20) << std::setfill(' ') << std::left << theSong.m_title
			<< " | " << std::setw(15) << std::setfill(' ') << std::left << theSong.m_artist
			<< " | " << std::setw(20) << std::setfill(' ') << std::left << theSong.m_album
			<< " | " << std::setw(6) << std::setfill(' ') << std::right << theSong.m_year
			<< " | " << mins << ":" << std::setw(2) << std::setfill('0') << std::right << secs
			<< " | " << std::fixed << std::setprecision(2) << theSong.m_price << " |" << std::endl;

		return out;
	}
}
