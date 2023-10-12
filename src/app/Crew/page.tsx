import H1, { h1IconClasses } from "@/components/content/h1";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Instagram, Users } from "lucide-react";
import Image from "next/image";

import { ShirtFolded, Dress } from "@phosphor-icons/react/dist/ssr"
import CrewCard from "@/components/crew/card";

export default function Crew() {
  return (
    <div className="flex flex-col items-center px-2">
      <div className="flex flex-col items-center my-4">
        <H1
          icon={<Users className={h1IconClasses} strokeWidth={1.5} />}
          subtitle="Conheça a tripulação do nosso voo"
        >
          Pais e Padrinhos
        </H1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 gap-y-4">
        <CrewCard
          gender="male"
          name="Alison Bessa"
          role="padrinho"
          side="his"
          photoUrl="https://github.com/alisonbessa.png"
          instagramUsername="alisonbessa"
        />
        <CrewCard
          gender="female"
          name="Érika Barros"
          role="padrinho"
          side="his"
          photoUrl="https://instagram.fcgh51-1.fna.fbcdn.net/v/t51.2885-19/366121975_153949291058968_8604241215087951383_n.jpg?stp=dst-jpg_s320x320&_nc_ht=instagram.fcgh51-1.fna.fbcdn.net&_nc_cat=104&_nc_ohc=VbjrgoxI7VIAX-7CXYj&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfDPc4cKtxnecufp_GyDz8uZrHE2U2g74uw2xBeaOToKiw&oe=652B802B&_nc_sid=8b3546"
          instagramUsername="erikaabarrros"
        />

        <CrewCard
          gender="male"
          name="Wesley Furtado"
          role="padrinho"
          side="her"
          photoUrl="https://instagram.fcgh51-1.fna.fbcdn.net/v/t51.2885-19/343563117_198164806411886_2237282874634517571_n.jpg?stp=dst-jpg_s320x320&_nc_ht=instagram.fcgh51-1.fna.fbcdn.net&_nc_cat=102&_nc_ohc=qqvE8hEVWtkAX9bx-BS&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfAipYPMA8VetHGE6HmbjUeByIP1u1fQUn47Mb8RZ3IJoA&oe=652B00BB&_nc_sid=8b3546"
          instagramUsername="wesleyfurtado5"
        />
        <CrewCard
          gender="female"
          name="Juliana Nunes"
          role="padrinho"
          side="her"
          photoUrl="https://instagram.fcgh51-1.fna.fbcdn.net/v/t51.2885-19/313927462_5441823242611444_6714731536417014156_n.jpg?stp=dst-jpg_s320x320&_nc_ht=instagram.fcgh51-1.fna.fbcdn.net&_nc_cat=104&_nc_ohc=Pz77T7iDUvsAX8UCzeZ&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfD_XTvsa7517XqQGztQrKZPX1v43yTgP6U3AlriRd4HHA&oe=652A4FD5&_nc_sid=8b3546"
          instagramUsername="erikaabarrros"
        />

        <CrewCard
          gender="male"
          name="Bruno Cardoso"
          role="parent"
          side="his"
          photoUrl="https://instagram.fcgh51-1.fna.fbcdn.net/v/t51.2885-19/309075325_143194641756774_1691149701198130940_n.jpg?stp=dst-jpg_s320x320&_nc_ht=instagram.fcgh51-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=kr3AOdXMONgAX9PZfib&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfCFIKoiSmdbjhQLZdlMiUqaSaxAe5nfVc7ER3rXIeMSbw&oe=652A38A8&_nc_sid=8b3546"
          instagramUsername="brunocardoso.bc"
        />
        <CrewCard
          gender="female"
          name="Karine Kerber"
          role="parent"
          side="his"
          photoUrl="https://instagram.fcgh51-1.fna.fbcdn.net/v/t51.2885-19/343968963_195001256691891_6442714213875450461_n.jpg?stp=dst-jpg_s320x320&_nc_ht=instagram.fcgh51-1.fna.fbcdn.net&_nc_cat=103&_nc_ohc=rYTDOYBS6REAX8FzOsE&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfCkvQp9gmuF92kdeFK84guInk95hG0dgH4BvFCH7p5iNA&oe=652B026D&_nc_sid=8b3546"
          instagramUsername="karinecakerber"
        />
      </div>
    </div>
  )
}