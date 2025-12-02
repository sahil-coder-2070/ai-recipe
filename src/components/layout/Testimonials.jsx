import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Home Cook",
    image:
      "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400",
    quote:
      "ChefAI has completely transformed my cooking! The personalized suggestions help me discover new recipes every week, and my family loves the variety.",
  },
  {
    name: "Michael Chen",
    role: "Food Enthusiast",
    image:
      "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400",
    quote:
      "The step-by-step guidance is incredible. I went from burning toast to making restaurant-quality meals. ChefAI made cooking fun and accessible.",
  },
  {
    name: "Emma Rodriguez",
    role: "Busy Parent",
    image:
      "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400",
    quote:
      "Smart meal planning saves me hours every week. ChefAI creates balanced meal plans and shopping lists - it is like having a personal chef assistant!",
  },
];

const Testimonials = () => {
  return (
    <>
      <section className="py-20 px-6 bg-linear-to-b from-green-50 to-orange-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-medium tracking-tight animate-fade-in-up text-center font-display w-full mb4">
              Loved by Home Cooks
            </h1>

            <p className="text-neutral-600 text-base md:text-lg  max-w-69 text-center md:w-full m-auto">
              See how ChefAI is changing the way people cook
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-sm border-neutral-200 border hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-orange-400 text-orange-400"
                    />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed italic">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-bold text-gray-900">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;
