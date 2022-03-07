// I have done all the coding by myself and only copied the code that my professor provided to complete my workshops and assignments.
// Workshop 8 - Smart Pointers
// 2019/11 - Cornel
//July 24, 2021 - Brody Neumann

#include <memory>
#include "List.h"
#include "Element.h"
#include "Utilities.h"

using namespace std;

namespace sdds {
	List<Product> mergeRaw(const List<Description>& desc, const List<Price>& price) {
		List<Product> priceList;

		for (size_t i = 0; i < desc.size(); i++) {
			for (size_t j = 0; j < price.size(); j++) {
				if (desc[i].code == price[j].code) {
					Product* ptr = new Product(desc[i].desc, price[j].price);
					ptr->validate();
					priceList += ptr;
					delete ptr;
					break;
				}
			}
		}

		return priceList;
	}

	List<Product> mergeSmart(const List<Description>& desc, const List<Price>& price) {
		List<Product> priceList;

		for (size_t i = 0; i < desc.size(); i++) {
			for (size_t j = 0; j < price.size(); j++) {
				if (desc[i].code == price[j].code) {
					std::unique_ptr<Product> ptr(new Product(desc[i].desc, price[j].price));
					ptr->validate();
					priceList += ptr;
					break;
				}
			}
		}

		return priceList;
	}
}