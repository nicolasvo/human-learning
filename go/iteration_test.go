package boi

import "testing"

func TestRepeat(t *testing.T) {
	t.Run("for loop", func(t *testing.T) {
		repeated := Repeat("a")
		expected := "aaaaaaa"

		if repeated != expected {
			t.Errorf("expected %q but got %q", expected, repeated)
		}
	})
}
