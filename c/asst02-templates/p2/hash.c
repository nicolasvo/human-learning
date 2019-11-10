#include "hash.h"
#include <stdio.h>

/*
 * Returns a hash value for the given string.
 */
uint64_t hashString(char *c)
{
	(void) c;

	uint64_t h = 5381;

    while (*c) {
        h = h*33 + (int)*c;
        c++;
    }

    return h;
}

/*
 * Inserts a key-value pair into the hash table.
 */
int insert(hashtable *table, char *key, int value)
{
	(void) table; (void) key; (void) value;

	uint64_t h = hashString(key);
	printf("%llu\n", h);
	uint64_t pos = h % table->capacity;
	printf("Position in the array: %llu\n", pos);

	element elt;
	elt.key = key;
	elt.value = value;
	printf("Key %s\n", elt.key);
	printf("Value %d\n", elt.value);
	elt.valid = 1;

	table->elements[pos] = elt;

    if
	    return 1;
}

/*
 * Retrieves the value for a given key.
 */
int find(hashtable *table, char *key, int *value)
{
	(void) table; (void) key; (void) value;
	return 0;
}

