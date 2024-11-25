"use client";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Sponsors from "./components/Sponsors";

export default function Home() {
    return (
        <div>
            <Navbar />             
            <Hero />             
            <Sponsors/>
            <Footer />

        </div>
    );
}   