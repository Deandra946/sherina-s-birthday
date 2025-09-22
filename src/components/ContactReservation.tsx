import { MapPin, Phone, Clock, Mail, Calendar, Users, MessageSquare } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Badge } from "./ui/badge";

export default function ContactReservation() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <Calendar className="h-8 w-8 text-amber-600" />
            <Badge variant="secondary" className="bg-amber-100 text-amber-800 px-4 py-2 rounded-full font-medium">
              Visit Us
            </Badge>
          </div>
          <h2 className="text-4xl md:text-6xl mb-6 text-amber-900 font-serif">
            Reserve Your
            <span className="bg-gradient-to-r from-amber-600 to-amber-800 bg-clip-text text-transparent block">
              Culinary Journey
            </span>
          </h2>
          <p className="text-xl text-amber-800 max-w-3xl mx-auto leading-relaxed font-light">
            Book your table for an unforgettable dining experience where tradition meets taste. 
            We look forward to serving you authentic Wonosobo cuisine in our warm, welcoming atmosphere.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information & Map */}
          <div className="space-y-8">
            {/* Contact Cards */}
            <div className="space-y-6">
              <Card className="border-0 shadow-lg rounded-3xl overflow-hidden bg-white/80 backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="bg-amber-100 p-4 rounded-2xl">
                      <MapPin className="h-6 w-6 text-amber-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl text-amber-900 mb-2 font-serif">Location</h3>
                      <p className="text-amber-700 leading-relaxed font-light">
                        Jl. Ahmad Yani No. 123<br />
                        Wonosobo, Central Java 56311<br />
                        Indonesia
                      </p>
                      <p className="text-amber-600 text-sm mt-2">
                        Located in the heart of Wonosobo, 5 minutes from the main square
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg rounded-3xl overflow-hidden bg-white/80 backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="bg-amber-100 p-4 rounded-2xl">
                      <Clock className="h-6 w-6 text-amber-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl text-amber-900 mb-2 font-serif">Opening Hours</h3>
                      <div className="space-y-2 text-amber-700 font-light">
                        <div className="flex justify-between">
                          <span>Monday - Friday</span>
                          <span>10:00 AM - 10:00 PM</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Saturday - Sunday</span>
                          <span>09:00 AM - 11:00 PM</span>
                        </div>
                        <div className="flex justify-between text-amber-600">
                          <span>Public Holidays</span>
                          <span>10:00 AM - 09:00 PM</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg rounded-3xl overflow-hidden bg-white/80 backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="bg-amber-100 p-4 rounded-2xl">
                      <Phone className="h-6 w-6 text-amber-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl text-amber-900 mb-2 font-serif">Contact</h3>
                      <div className="space-y-2 text-amber-700 font-light">
                        <div className="flex items-center space-x-2">
                          <Phone className="h-4 w-4 text-amber-600" />
                          <span>+62 286 321 234</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Mail className="h-4 w-4 text-amber-600" />
                          <span>reservations@rasawonosobo.id</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <MessageSquare className="h-4 w-4 text-amber-600" />
                          <span>WhatsApp: +62 812 3456 7890</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Embedded Map Placeholder */}
            <Card className="border-0 shadow-lg rounded-3xl overflow-hidden">
              <div className="bg-gradient-to-br from-amber-100 to-orange-100 h-64 flex items-center justify-center">
                <div className="text-center text-amber-700">
                  <MapPin className="h-12 w-12 mx-auto mb-4 text-amber-600" />
                  <h4 className="text-lg font-serif mb-2">Interactive Map</h4>
                  <p className="text-sm font-light">Click to view location on Google Maps</p>
                  <Button className="mt-4 bg-amber-600 hover:bg-amber-700 text-white rounded-full px-6">
                    View on Maps
                  </Button>
                </div>
              </div>
            </Card>
          </div>

          {/* Reservation Form */}
          <Card className="border-0 shadow-xl rounded-3xl overflow-hidden bg-white/90 backdrop-blur-sm">
            <CardContent className="p-8">
              <div className="mb-8">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="bg-amber-100 p-3 rounded-full">
                    <Calendar className="h-6 w-6 text-amber-600" />
                  </div>
                  <h3 className="text-2xl text-amber-900 font-serif">Make a Reservation</h3>
                </div>
                <p className="text-amber-700 font-light">
                  Secure your table for an authentic Wonosobo dining experience
                </p>
              </div>

              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName" className="text-amber-800">First Name</Label>
                    <Input 
                      id="firstName" 
                      placeholder="Enter your first name"
                      className="rounded-xl border-amber-200 focus:border-amber-400 focus:ring-amber-400"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName" className="text-amber-800">Last Name</Label>
                    <Input 
                      id="lastName" 
                      placeholder="Enter your last name"
                      className="rounded-xl border-amber-200 focus:border-amber-400 focus:ring-amber-400"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-amber-800">Email</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="your@email.com"
                      className="rounded-xl border-amber-200 focus:border-amber-400 focus:ring-amber-400"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-amber-800">Phone</Label>
                    <Input 
                      id="phone" 
                      type="tel" 
                      placeholder="+62 812 3456 7890"
                      className="rounded-xl border-amber-200 focus:border-amber-400 focus:ring-amber-400"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="date" className="text-amber-800">Date</Label>
                    <Input 
                      id="date" 
                      type="date"
                      className="rounded-xl border-amber-200 focus:border-amber-400 focus:ring-amber-400"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="time" className="text-amber-800">Time</Label>
                    <Select>
                      <SelectTrigger className="rounded-xl border-amber-200 focus:border-amber-400 focus:ring-amber-400">
                        <SelectValue placeholder="Select time" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="10:00">10:00 AM</SelectItem>
                        <SelectItem value="11:00">11:00 AM</SelectItem>
                        <SelectItem value="12:00">12:00 PM</SelectItem>
                        <SelectItem value="13:00">01:00 PM</SelectItem>
                        <SelectItem value="14:00">02:00 PM</SelectItem>
                        <SelectItem value="18:00">06:00 PM</SelectItem>
                        <SelectItem value="19:00">07:00 PM</SelectItem>
                        <SelectItem value="20:00">08:00 PM</SelectItem>
                        <SelectItem value="21:00">09:00 PM</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="guests" className="text-amber-800">Guests</Label>
                    <Select>
                      <SelectTrigger className="rounded-xl border-amber-200 focus:border-amber-400 focus:ring-amber-400">
                        <SelectValue placeholder="Number of guests" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">1 Guest</SelectItem>
                        <SelectItem value="2">2 Guests</SelectItem>
                        <SelectItem value="3">3 Guests</SelectItem>
                        <SelectItem value="4">4 Guests</SelectItem>
                        <SelectItem value="5">5 Guests</SelectItem>
                        <SelectItem value="6">6 Guests</SelectItem>
                        <SelectItem value="7">7+ Guests (Group)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="occasion" className="text-amber-800">Special Occasion (Optional)</Label>
                  <Select>
                    <SelectTrigger className="rounded-xl border-amber-200 focus:border-amber-400 focus:ring-amber-400">
                      <SelectValue placeholder="Select occasion" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="birthday">Birthday Celebration</SelectItem>
                      <SelectItem value="anniversary">Anniversary</SelectItem>
                      <SelectItem value="business">Business Meeting</SelectItem>
                      <SelectItem value="date">Romantic Date</SelectItem>
                      <SelectItem value="family">Family Gathering</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="notes" className="text-amber-800">Special Requests</Label>
                  <Textarea 
                    id="notes" 
                    placeholder="Dietary restrictions, seating preferences, or any special requests..."
                    className="rounded-xl border-amber-200 focus:border-amber-400 focus:ring-amber-400 min-h-[100px]"
                  />
                </div>

                <Button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white rounded-xl py-4 shadow-lg hover:shadow-xl transition-all font-medium"
                >
                  <Calendar className="mr-2 h-5 w-5" />
                  Confirm Reservation
                </Button>

                <p className="text-center text-amber-600 text-sm font-light">
                  We'll confirm your reservation within 2 hours via email or phone
                </p>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Quick Contact Options */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl text-amber-900 mb-6 font-serif">Need Immediate Assistance?</h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-green-600 hover:bg-green-700 text-white rounded-full px-8 py-3 shadow-lg hover:shadow-xl transition-all">
              <MessageSquare className="mr-2 h-5 w-5" />
              WhatsApp Us
            </Button>
            <Button variant="outline" className="border-amber-300 text-amber-700 hover:bg-amber-50 rounded-full px-8 py-3 shadow-lg hover:shadow-xl transition-all">
              <Phone className="mr-2 h-5 w-5" />
              Call Direct
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}