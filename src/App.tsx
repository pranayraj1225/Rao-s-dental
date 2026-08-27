/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { TrustStrip } from "./components/TrustStrip";
import { About } from "./components/About";
import { WhyChooseUs } from "./components/WhyChooseUs";
import { Treatments } from "./components/Treatments";
import { FeaturedTreatment } from "./components/FeaturedTreatment";
import { Journey } from "./components/Journey";
import { Reviews } from "./components/Reviews";
import { Gallery } from "./components/Gallery";
import { AppointmentCTA } from "./components/AppointmentCTA";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <TrustStrip />
        <About />
        <WhyChooseUs />
        <Treatments />
        <FeaturedTreatment />
        <Journey />
        <Reviews />
        <Gallery />
        <AppointmentCTA />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
