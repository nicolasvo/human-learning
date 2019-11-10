#include "testlib.h"
#include "hash.h"


int main()
{
    test_start("hash.c");

    test_equals_int64(hashString("A"), 177638, "hash of A is correct");
    test_equals_int64(hashString("AB"), 5862120, "hash of AB is correct");

    element e[10] = { {0} };
    hashtable h = {e, 10};

    test_equals_int(insert(&h, "abc", 1234), 1, "inserting abc works");
//    test_equals_int(insert(&h, "abcd", 1234), 1, "inserting abcd works");
    int val;
    test_equals_int(find(&h, "abc", &val), 1, "retrieving abc works");
    test_equals_int(val, 1234, "h[abc] == 1234");

    return test_end();
}
