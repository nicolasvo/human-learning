#include <stdint.h>
#include <stdio.h>


#include "bits.h"

/*
 * Returns the n'th bit of the array A.
 */
int getN(uint64_t *A, size_t n)
{
    (void) A;
    (void) n;

    return (*A >> n) & 1ULL;
}

/*
 * Sets the n'th bit of the array A.
 */
void setN(uint64_t *A, size_t n)
{
    (void) A;
    (void) n;

    *A |= 1ULL << n;
}

/*
 * Clears the n'th bit of the array A.
 */
void clrN(uint64_t *A, size_t n)
{
    (void) A;
    (void) n;

    *A &= ~(1ULL << n);
}


/*
 * Rotates the integer i n bits to the right.
 */
uint64_t rot(uint64_t i, int n)
{
    (void) i;
    (void) n;

    return (n > 0) ? (i >> n) | (i << (64 - n)) : (i << n) | (i >> (64 - n));

    return 0;
}
