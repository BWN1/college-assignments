//I have done all the coding by myself and only copied the code that my professor provided to complete my workshops and assignments.
// Workshop 7 - STL Algorithms
//July 18, 2021 - Brody Neumann
#include <iostream>
#include <iomanip>
#include <fstream>
#include <algorithm>
#include <numeric>
#include <functional>
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
			removeSpaces(tempSong.m_artist);
			temp.erase(0, FILE_TEXT_TOKEN_LENGTH);

			tempSong.m_album = temp.substr(0, FILE_TEXT_TOKEN_LENGTH);
			removeSpaces(tempSong.m_album);
			temp.erase(0, FILE_TEXT_TOKEN_LENGTH);

			tempSong.m_year = temp.substr(0, FILE_NUM_TOKEN_LENGTH);
			if (tempSong.m_year.find_first_not_of(' ') != std::string::npos)
				removeSpaces(tempSong.m_year);
			temp.erase(0, FILE_NUM_TOKEN_LENGTH);

			tempSong.m_length = stoi(temp.substr(0, FILE_NUM_TOKEN_LENGTH));
			temp.erase(0, FILE_NUM_TOKEN_LENGTH);

			tempSong.m_price = stod(temp.substr(0, FILE_NUM_TOKEN_LENGTH));
			temp.erase();

			m_songs.push_back(tempSong);
		}
	}
	void SongCollection::display(std::ostream& out) const
	{
		std::for_each(m_songs.begin(), m_songs.end(), [&out](Song song) {
			out << song << std::endl;
		});

		int totalTime = std::accumulate(m_songs.begin(), m_songs.end(), 0, [](int total, Song s2) {
			return total + s2.m_length;
		});

		size_t secs = totalTime % 60;
		size_t totalMins = totalTime / 60;
		size_t mins = totalMins % 60;
		size_t hours = totalMins / 60;

		//print bar
		out << std::setw(89) << std::setfill('-') << '\n' << std::setfill(' ');
		
		out << "| " << std::setw(77) << std::right
			<< "Total Listening Time: " << hours << ":"
			<< std::setw(2) << std::setfill('0') << mins << ":"
			<< std::setw(2) << std::setfill('0') << secs << " |" << std::endl;
	}
	void SongCollection::sort(const std::string str)
	{
		if (str == "title") {
			std::sort(m_songs.begin(), m_songs.end(), [](Song s1, Song s2) {
				return s1.m_title < s2.m_title;
			});
		}
		else if (str == "album") {
			std::sort(m_songs.begin(), m_songs.end(), [](Song s1, Song s2) {
				return s1.m_album < s2.m_album;
			});
		}
		else if (str == "length") {
			std::sort(m_songs.begin(), m_songs.end(), [](Song s1, Song s2) {
				return s1.m_length < s2.m_length;
			});
		}
	}
	void SongCollection::cleanAlbum()
	{
		std::for_each(m_songs.begin(), m_songs.end(), [](Song& song) {
			if (song.m_album == "[None]") song.m_album = "";
		});
	}
	bool SongCollection::inCollection(const std::string str) const
	{
		auto inCollection = std::find_if(m_songs.begin(), m_songs.end(), [str](Song song) {
			return song.m_artist == str;
		});
		return inCollection != m_songs.end();
	}
	std::list<Song> SongCollection::getSongsForArtist(const std::string str) const
	{
		auto numSongs = std::count_if(m_songs.begin(), m_songs.end(), [str](Song song) {
				return song.m_artist == str;
		});

		std::list<Song> artistSongs(numSongs);

		std::copy_if(m_songs.begin(), m_songs.end(), artistSongs.begin(), [str](Song song) {
			return song.m_artist == str;
		});

		return artistSongs;
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
			<< " | " << std::fixed << std::setprecision(2) << theSong.m_price << " |";

		return out;
	}
}
