// Name: Brody Neumann
// Seneca Student ID: 134873207
// Seneca email: bneumann@myseneca.ca
// Date of completion: July 27, 2021
//
// I confirm that I am the only author of this file
// and the content was created entirely by me.
#ifndef LINEMANAGER_H
#define LINEMANAGER_H
namespace sdds {
	class LineManager {
		std::vector<Workstation*> activeLine;
		size_t m_cntCustomerOrder;
		Workstation* m_firstStation;
	public:
		LineManager();
		LineManager(const std::string& file, const std::vector<Workstation*>& stations);
		// Copy and move semantics deleted as it is unused 
		// and not no behavior was defined in README.md
		LineManager(const LineManager& co) = delete;
		LineManager& operator=(const LineManager& co) = delete;
		LineManager(LineManager&& co) noexcept = delete;
		LineManager& operator=(LineManager&& co) noexcept = delete;
		~LineManager() {} // Pointer to first station is deleted in ms3.cpp
		void linkStations();
		bool run(std::ostream& os);
		void display(std::ostream& os) const;
	};
}
#endif //! LINEMANAGER_H