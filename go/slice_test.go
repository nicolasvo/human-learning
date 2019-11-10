package boi

import "testing"

func TestSlice(t *testing.T)  {
	t.Run("create an array", func(t *testing.T) {
		numbers := [5]int{1, 2, 3, 4, 5}
		want := 2
		if numbers[1] != want {
			t.Errorf("got %d wanted %d", numbers[1], want)
		}
	})

	t.Run("array length", func(t *testing.T) {
		numbers := [5]int{1, 2, 3, 4, 5}
		expected := 5
		if len(numbers) != expected {
			t.Errorf("got length %d wanted %d", len(numbers), expected)
		}
	})

	t.Run("what is make", func(t *testing.T) {

		got := ManySlices([]int{1,2}, []int{1, 2, 3, 4, 5})
		_ = got
	})
}