//I have done all the coding by myself and only copied the code that my professor provided to complete my workshops and assignments.
// Workshop 7 - STL Algorithms
//July 18, 2021 - Brody Neumann
#ifndef SONGCOLLECTION_H
#define SONGCOLLECTION_H
#include <string>
#include <vector>
#include <list>
namespace sdds {
    struct Song
    {
        std::string m_artist;
        std::string m_title;
        std::string m_album;
        double m_price;
        std::string m_year;
        size_t m_length;
    };
    
    class SongCollection {
        std::vector<Song> m_songs;
        void removeSpaces(std::string& str);
    public:
        SongCollection(std::string fname);
        void display(std::ostream& out) const;
        void sort(const std::string str);
        void cleanAlbum();
        bool inCollection(const std::string str) const;
        std::list<Song> getSongsForArtist(const std::string str) const;
    };

    std::ostream& operator<<(std::ostream& out, const Song& theSong);
}
#endif //! SONGCOLLECTION_H