import React from "react";
import {
  ShieldCheck,
  Truck,
  Headphones,
  RotateCcw,
  Heart,
  Sparkles,
  ShoppingBag,
  CheckCircle2,
  ArrowRight,
  Star,
} from "lucide-react";
import { Link } from "react-router";

const AboutPage = () => {
  const features = [
    {
      icon: ShieldCheck,
      title: "Secure Shopping",
      description:
        "Your information and shopping experience are protected with secure and reliable technology.",
    },
    {
      icon: Truck,
      title: "Fast Delivery",
      description:
        "We work hard to make sure your orders reach you quickly and safely.",
    },
    {
      icon: RotateCcw,
      title: "Easy Returns",
      description:
        "Changed your mind? Our simple return process makes shopping completely stress-free.",
    },
    {
      icon: Headphones,
      title: "Customer Support",
      description:
        "Our support team is always ready to help whenever you need assistance.",
    },
  ];

  const values = [
    {
      icon: Heart,
      title: "Customer First",
      description:
        "Everything we do starts with our customers. We focus on creating a simple and enjoyable shopping experience.",
    },
    {
      icon: Sparkles,
      title: "Quality Matters",
      description:
        "We believe customers deserve products that offer great value, quality and reliability.",
    },
    {
      icon: ShoppingBag,
      title: "Simple Shopping",
      description:
        "From discovering products to checkout, we keep the entire experience simple and intuitive.",
    },
  ];

  const stats = [
    {
      number: "10K+",
      label: "Happy Customers",
    },
    {
      number: "5K+",
      label: "Products",
    },
    {
      number: "99%",
      label: "Customer Satisfaction",
    },
    {
      number: "24/7",
      label: "Customer Support",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">

      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden bg-white">

        {/* Background Decoration */}
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-indigo-100 rounded-full blur-3xl opacity-60" />

        <div className="absolute -bottom-40 -left-32 w-96 h-96 bg-violet-100 rounded-full blur-3xl opacity-60" />

        <div className="relative max-w-7xl mx-auto px-6 py-24 lg:py-32">

          <div className="max-w-3xl mx-auto text-center">

            {/* Small Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 text-indigo-600 text-sm font-medium mb-6">
              <Sparkles size={16} />
              More than just shopping
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
              Shopping made
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">
                {" "}simple & better.
              </span>
            </h1>

            <p className="mt-6 text-lg text-gray-500 leading-8 max-w-2xl mx-auto">
              We are building a modern shopping experience where great
              products, reliable service and customer satisfaction come
              together in one simple place.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">

              <Link
                to="/main/shop"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-medium shadow-md shadow-indigo-200 hover:from-indigo-700 hover:to-violet-700 transition-all"
              >
                Start Shopping
                <ArrowRight size={18} />
              </Link>

              <a
                href="#why-us"
                className="inline-flex items-center justify-center px-6 py-3 rounded-xl border border-gray-200 bg-white text-gray-700 font-medium hover:bg-gray-50 transition"
              >
                Learn More
              </a>

            </div>
          </div>
        </div>
      </section>

      {/* ================= INTRO ================= */}
      <section className="py-20 lg:py-28 bg-gray-50">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* Content */}
            <div>

              <span className="text-sm font-semibold text-indigo-600 uppercase tracking-wider">
                Who We Are
              </span>

              <h2 className="mt-3 text-3xl sm:text-4xl font-bold leading-tight">
                Built around a better
                <br />
                way to shop.
              </h2>

              <p className="mt-6 text-gray-500 leading-7">
                Our store was created with one simple idea: online shopping
                should be convenient, trustworthy and enjoyable.
              </p>

              <p className="mt-4 text-gray-500 leading-7">
                We bring together a carefully organized collection of
                products and a clean shopping experience so you can spend
                less time searching and more time finding what you actually
                need.
              </p>

              <div className="mt-8 space-y-4">

                <div className="flex items-center gap-3">
                  <CheckCircle2
                    size={20}
                    className="text-indigo-600"
                  />

                  <span className="text-gray-700">
                    Carefully selected products
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <CheckCircle2
                    size={20}
                    className="text-indigo-600"
                  />

                  <span className="text-gray-700">
                    Secure and reliable shopping
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <CheckCircle2
                    size={20}
                    className="text-indigo-600"
                  />

                  <span className="text-gray-700">
                    Customer-focused service
                  </span>
                </div>

              </div>
            </div>

            {/* Visual Card */}
            <div className="relative">

              <div className="aspect-square max-w-md mx-auto rounded-3xl bg-gradient-to-br from-indigo-600 to-violet-600 p-1">

                <div className="w-full h-full rounded-[22px] bg-white flex flex-col items-center justify-center text-center p-10">

                  <div className="w-20 h-20 rounded-2xl bg-indigo-50 flex items-center justify-center mb-6">
                    <ShoppingBag
                      size={38}
                      className="text-indigo-600"
                    />
                  </div>

                  <h3 className="text-2xl font-bold">
                    Your trusted
                    <br />
                    shopping partner
                  </h3>

                  <p className="mt-4 text-gray-500">
                    Quality products. Simple experience. Reliable service.
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ================= STATS ================= */}
      <section className="bg-white border-y border-gray-100">

        <div className="max-w-7xl mx-auto px-6 py-16">

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">

            {stats.map((stat) => (
              <div
                key={stat.label}
                className="text-center"
              >
                <h3 className="text-3xl sm:text-4xl font-bold text-gray-900">
                  {stat.number}
                </h3>

                <p className="mt-2 text-sm text-gray-500">
                  {stat.label}
                </p>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* ================= WHY US ================= */}
      <section
        id="why-us"
        className="py-20 lg:py-28 bg-gray-50"
      >

        <div className="max-w-7xl mx-auto px-6">

          <div className="max-w-2xl mx-auto text-center mb-14">

            <span className="text-sm font-semibold text-indigo-600 uppercase tracking-wider">
              Why Choose Us
            </span>

            <h2 className="mt-3 text-3xl sm:text-4xl font-bold">
              Everything you need for
              <br />
              confident shopping.
            </h2>

            <p className="mt-5 text-gray-500 leading-7">
              We focus on the details that make online shopping feel
              safe, convenient and enjoyable.
            </p>

          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

            {features.map((feature) => {

              const Icon = feature.icon;

              return (
                <div
                  key={feature.title}
                  className="bg-white border border-gray-200 rounded-2xl p-7 hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
                >

                  <div className="w-12 h-12 rounded-xl bg-indigo-50 flex items-center justify-center">
                    <Icon
                      size={24}
                      className="text-indigo-600"
                    />
                  </div>

                  <h3 className="mt-6 text-lg font-semibold">
                    {feature.title}
                  </h3>

                  <p className="mt-3 text-sm text-gray-500 leading-6">
                    {feature.description}
                  </p>

                </div>
              );
            })}

          </div>

        </div>
      </section>

      {/* ================= VALUES ================= */}
      <section className="py-20 lg:py-28 bg-white">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-3 gap-10">

            <div className="lg:pr-10">

              <span className="text-sm font-semibold text-indigo-600 uppercase tracking-wider">
                Our Values
              </span>

              <h2 className="mt-3 text-3xl sm:text-4xl font-bold">
                What we believe in.
              </h2>

              <p className="mt-5 text-gray-500 leading-7">
                Our values guide every decision we make and every
                experience we create for our customers.
              </p>

            </div>

            {values.map((value) => {

              const Icon = value.icon;

              return (
                <div
                  key={value.title}
                  className="border-l-2 border-indigo-100 pl-7"
                >

                  <div className="w-11 h-11 rounded-lg bg-gray-50 flex items-center justify-center">
                    <Icon
                      size={22}
                      className="text-indigo-600"
                    />
                  </div>

                  <h3 className="mt-5 text-xl font-semibold">
                    {value.title}
                  </h3>

                  <p className="mt-3 text-gray-500 leading-7">
                    {value.description}
                  </p>

                </div>
              );
            })}

          </div>

        </div>
      </section>

      {/* ================= TRUST ================= */}
      <section className="py-20 bg-gray-50">

        <div className="max-w-4xl mx-auto px-6 text-center">

          <div className="flex justify-center gap-1 mb-5">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                size={20}
                className="fill-indigo-500 text-indigo-500"
              />
            ))}
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold">
            Your trust means everything to us.
          </h2>

          <p className="mt-5 text-gray-500 leading-7 max-w-2xl mx-auto">
            We believe trust is earned through consistent service,
            transparent communication and a shopping experience that
            puts customers first.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">

            <div className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-full text-sm text-gray-600">
              <ShieldCheck size={17} className="text-indigo-600" />
              Secure Shopping
            </div>

            <div className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-full text-sm text-gray-600">
              <CheckCircle2 size={17} className="text-indigo-600" />
              Quality Products
            </div>

            <div className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-full text-sm text-gray-600">
              <Headphones size={17} className="text-indigo-600" />
              Customer Support
            </div>

          </div>

        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-20">

        <div className="max-w-7xl mx-auto px-6">

          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-indigo-600 to-violet-600 px-8 py-16 sm:px-16 text-center text-white">

            <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/10 rounded-full blur-2xl" />

            <div className="relative">

              <h2 className="text-3xl sm:text-4xl font-bold">
                Ready to find something you love?
              </h2>

              <p className="mt-4 text-indigo-100 max-w-xl mx-auto">
                Explore our collection and discover products selected
                to make your everyday life a little better.
              </p>

              <Link
                to="/main/shop"
                className="inline-flex items-center gap-2 mt-8 px-6 py-3 rounded-xl bg-white text-indigo-600 font-semibold hover:bg-gray-100 transition"
              >
                Explore Shop
                <ArrowRight size={18} />
              </Link>

            </div>

          </div>

        </div>

      </section>

    </div>
  );
};

export default AboutPage;