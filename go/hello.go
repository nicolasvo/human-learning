package boi

import "fmt"

const hello = "hello, "

func Hello(name string, lang string) string {
	if name == "" {
		return "prout"
	}

	switch lang {
	case "de":
		return "jello, " + name
	default:
		return "hello, " + name
	}
}

func main() {
	fmt.Println(Hello("something", ""))
}
