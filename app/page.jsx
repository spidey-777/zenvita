import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { features, creditBenefits, testimonials } from "@/lib/data";
import { ArrowRight, Check, Stethoscope } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-background">
      <section className="relative overflow-hidden py-32 h-full">
        <div className="container mx-auto py-4 ">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 item-center">
            <div className="space-y-4">
              <Badge
                variant="outline"
                className="bg-emerald-900/30 border-emerald-700/30 px-4 py-2 text-emerald-400 "
              >
                Healthcare made simple{" "}
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight ">
                Connect with Doctors <br />{" "}
                <span className="gradient-title">anytime, anywhere</span>
              </h1>
              <p className="text-muted-foreground text-lg  md:text-xl max-w-md ">
                Book appointments, consult via video calls, and manage your
                healthcare journey all in one secure plateform{" "}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 ">
                <Link href="/onboarding">
                  <Button
                    asChild
                    size="lg"
                    className="bg-emerald-600 text-white hover:bg-emerald-700"
                  >
                    <span className=" group flex items-center">
                      Get Started{" "}
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                    </span>
                  </Button>
                </Link>
                <Link href={"/doctors"}>
                  <Button
                    asChild
                    size="lg"
                    className="bg-emerald-700/30 text-white hover:bg-muted/80"
                    variant={"outline"}
                  >
                    <span className=" group flex items-center">
                      find Doctor
                    </span>
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative h-[400px] lg:h-[500px] rounded-xl overflow-hidden">
              <Image
                src="/banner2.png"
                alt="doctor consultation"
                fill
                className="object-cover rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              How it Works
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              our plateform makes healthcare accessble with just few clicks{" "}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              return (
                <Card
                  key={index}
                  className="border-emerald-900/20 hover:border-emerald-800/40 transition-all duration-300 "
                >
                  <CardHeader className="pb-2">
                    <div className="bg-emerald-900/30 p-3 rounded-lg w-fit mb-4">
                      {feature.icon}
                    </div>
                    <CardTitle className="font-xl font-semibold text-white ">
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>{feature.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 ">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-emerald-900/30 border border-emerald-700/30 px-4 py-1 text-emerald-400 text-sm font-medium mb-4">
              Affordable Healthcare
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Consultation Packages
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Choose the perfect consultation packages that suits your
              healthcare
            </p>
          </div>
          <div>
            {/* pricing Table  */}

            <Card className="mt-12 bg-muted/20 border-emerald-900/20">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-white flex items-center">
                  <Stethoscope className="h-5 w-5 mr-2  text-emerald-500" />
                  How our credit system works
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {creditBenefits.map((creditBenefit, index) => {
                    return (
                      <li key={index} className="flex items-start">
                        <div className="mr-3 mt-1 bg-emerald-900/20 p-1  rounded-full">
                          <Check className="h-4 w-4 mr-2  text-emerald-500" />
                        </div>
                        <p
                          className="text-muted-foreground "
                          dangerouslySetInnerHTML={{ __html: creditBenefit }}
                        />
                      </li>
                    );
                  })}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge
              variant={"outline"}
              className="bg-emerald-900/30 border-emerald-700/30 px-4 py-1 text-emerald-400 text-sm font-medium mb-4"
            >
              Success Story
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              What Our User's Say
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Hear from patients and doctors who use our plateform
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonials, index) => {
              return (
                <Card
                  key={index}
                  className="border-emerald-900/20 hover:border-emerald-800/40 transition-all duration-300 "
                >
                  <CardContent>
                    <div className="flex items-center mb-4 ">
                      <div className="w-12 h-12 rounded-full bg-emerald-900/20 flex items-center justify-center mr-4">
                        <span className="font-bold text-emerald-400">
                          {testimonials.initials}
                        </span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-white">
                          {testimonials.name}
                        </h4>
                        <p>{testimonials.role}</p>
                      </div>
                    </div>
                    <p className="text-muted-foreground">
                      &quot;{testimonials.quote}&quot;
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-30">
        <div className="container mx-auto px-4">
          <Card className="bg-gradient-to-r from-emerald-900/30 to-emerald-950/20 border-emerald-800/20 ">
            <CardContent className="p-5 sm:p-10 md:p-6 relative overflow-hidden">
              <div >
                <h2 className="font-bold  mb-2 text-4xl" >Ready to take control of your healthcare ?</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Join thousands of users who have simplified their healthcare
                  journey with our platform. Get started today and experience
                  healthcare the way it should{" "}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                  size='lg'
                  className='bg-emerald-600 text-white hover:bg-emerald-700'
                  asChild
                  >
                    <Link href={`/sign-up`}>Sign up</Link>

                  </Button>
                  <Button
                  size='lg'
                  variant={'outline'}
                  className='bg-emerald-700/30  hover:bg-muted/80'
                  asChild
                  >
                    <Link href={`/pricing`}>view pricing</Link>

                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}

//  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
