package boi

import "testing"
//import "./app"

func TestHell(t *testing.T) {

	assertCorrectMessage := func(t *testing.T, got, want string) {
		t.Helper()
		if got != want {
			t.Errorf("got %q want %q", got, want)
		}
	}

	t.Run("saying hello", func(t *testing.T) {

		got := Hello("something", "")
		want := "hello, something"

		assertCorrectMessage(t, got, want)
	})

	t.Run("empty string defaults to 'prout'", func(t *testing.T) {
		got := Hello("", "")
		want := "prout"
		assertCorrectMessage(t, got, want)
	})

	t.Run("in german", func(t *testing.T) {
		got := Hello("bae", "de")
		want := "jello, bae"
		assertCorrectMessage(t, got, want)
	})
}
