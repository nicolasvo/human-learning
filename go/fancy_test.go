package boi

import "testing"

func TestPerimeter(t *testing.T) {
	rectangle := Rectangle{5.0, 5.0}
	got := Perimeter(rectangle)
	want := 20.0

	if got != want {
		t.Errorf("got %.2f want %.2f", got, want)
	}
}

func TestArea(t *testing.T) {

	//checkArea := func(t *testing.T, shape Shape, want float64) {
	//	t.Helper()
	//	got := shape.Area()
	//	if got != want {
	//		t.Errorf("got %.2f want %.2f", got, want)
	//	}
	//}
	//
	//t.Run("rectangles", func(t *testing.T) {
	//	rectangle := Rectangle{2.0, 3.0}
	//	checkArea(t, rectangle, 6.0)
	//})
	//
	//t.Run("circles", func(t *testing.T) {
	//	circle := Circle{10}
	//	checkArea(t, circle, 314.16)
	//})

	areaTests := []struct {
		shape Shape
		want  float64
	}{
		{Rectangle{2, 3}, 6},
		{Circle{10}, 314.16},
		//{Triangle{10}, 314.16},

	}

	for _, tt := range areaTests {
		got := tt.shape.Area()
		if got != tt.want {
			t.Errorf("got %.2f want %.2f", got, tt.want)
		}
	}
}
