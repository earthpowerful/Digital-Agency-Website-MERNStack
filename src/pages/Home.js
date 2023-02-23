import React, { useState } from 'react'
import { Button } from "@material-tailwind/react";
import offerImg from '../assets/img/offer.png'
import introImg from '../assets/img/intro-img.png'
import sellerImg from '../assets/img/seller.png'
import discordImg from '../assets/img/discord.png'
import IntroCard from '../components/common/IntroCard'
import EscapeStep from '../components/common/EscapeStep';

const escapeData = [
  {
    header: 'Step 1',
    body: "- Access our e-commerce store for powerful courses on psychology, crypto, IT, and more, designed to help you develop skills and knowledge to thrive in the modern digital world."
  },
  {
    header: 'Step 2',
    body: "- Join our agency to gain access to exclusive job opportunities, training, and powerful tools that can help you start or grow your career and business for FREE."
  },
  {
    header: 'Step 3',
    body: "- In order to truly escape the matrix, it's important to surround yourself with people who share your mindset and values. That's why our agency offers a community of like-minded individuals who are all working towards financial freedom and personal growth. Through our online platform, you can connect with others, share your experiences, and learn from each other. This community is a great place to find support and encouragement as you work towards your goals."
  },
  {
    header: 'Step 4',
    body: "- Use the skills and knowledge you've acquired to build a life of abundance, independence, and freedom. Whether you're looking to start a new business, build a side hustle, or pursue a fulfilling career, our services can help you get there faster and more efficiently than you ever thought possible."
  }
];


const Home = () => {
  const [quantity1, setQuantity1] = useState(1);
  console.log('asfasf', quantity1)
  const [quantity2, setQuantity2] = useState(1);
  return (
    <div className='home bg-[#0d1245]'>
      <div className='flex items-center justify-center pt-[60px]'>
        <div className='intro  w-[50%] pl-[140px] pr-[30px]'>
          <p className='intro-title text-[#c471f5] text-[30px] font-bold pb-[15px]'>
            The Creatus Marketing Agency: Join the Revolution and Transform the Internet
          </p>
          <p className='intro-content text-[#7f4db2] text-[15px]'>
            At Creatus Marketing Agency, we believe that anyone can achieve success in the digital world with the right mindset and tools. That's why our agency provides free training and opportunities for people to make money, with all the necessary tools for the job. We understand that commitment is key to achieving success, and we're here to support you every step of the way.
            <br />
            <br />
            In addition to our agency, we also have an e-commerce store that provides a wealth of information and courses to help you make money. Our courses cover a range of topics, including psychology, crypto, and IT, among many others. With Creatus Marketing Agency, you have access to all the tools and resources you need to succeed in the digital world. Join us today and start your journey towards success!
            <br />
            <br />
            WE HAVE OVER 200+ PEOPLE SATISFIED WITH OUR PRODUCTS AND SERVICES
            <br />
            <br />
          </p>
          <Button onClick={(e) => {
            e.preventDefault()
            window.location.href = "/store"
          }} variant="filled" className='bg-[#a4ef7d] text-[#0d1245] font-thin'>SHOP NOW</Button>
        </div>
        <div className='intro-img  w-[50%] pr-[70px]'>
          <img src={introImg} alt="intro-img" />
        </div>
      </div>
      <div className='week pt-[60px] w-[55%] pl-[70px] pb-[100px]'>
        <p className='week-title text-[#c471f5] text-[45px] font-bold pb-[15px]'>
          ONLY THIS WEEK
        </p>
        <p className='week-content text-[#7f4db2] text-[14px]'>
          BUY ONE PRODUCT AND RECEIVE A BONUS ONE-MONTH SUBSCRIPTION TO OUR EXCLUSIVE TRAINING PROGRAM, DESIGNED TO EQUIP YOU WITH THE SKILLS AND KNOWLEDGE NEEDED TO SUCCEED IN POPULAR INCOME-GENERATING FIELDS SUCH AS SMMA, WEB DESIGN, VIRTUAL ASSISTANCE, AND MORE. OUR PROGRAM CONSISTS OF THREE COMPREHENSIVE STAGES, EACH TAILORED TO ENHANCE YOUR SKILLSET AND ADVANCE YOUR CAREER. DON'T MISS OUT ON THIS OPPORTUNITY TO ELEVATE YOUR EXPERTISE AND BOOST YOUR EARNING POTENTIAL.
        </p>
      </div>
      <IntroCard Img={offerImg} setQuantity={setQuantity1} quantity={quantity1} title='LIMITED OFFER' content="Transform Your Life with Andrew Tate's OG Courses" />
      <IntroCard Img={sellerImg} setQuantity={setQuantity2} quantity={quantity2} title='BEST SELLER' content='The Ultimate Learning Bundle: 1TB of Paid Courses Worth $200K+' />
      <div className='flex items-center justify-center'>
        <div className='intro  w-[50%] pl-[140px] pr-[30px]'>
          <p className='intro-title text-[#c471f5] text-[30px] font-bold pb-[15px]'>
            Join Our Movement and Unlock Your Potential Today!
          </p>
          <p className='intro-content text-[#7f4db2] text-[15px]'>
            Join our free agency and get access to exclusive training and job opportunities. Our agency offers free modules and information, as well as all the necessary tools to succeed in the industry. We provide our members with a supportive community and opportunities to earn money without any upfront costs. Don't miss out on this unique chance to build a successful career – join now!
            <br />
            <br />
          </p>
          <Button variant="filled" className='bg-[#a4ef7d] text-[#0d1245] font-thin'>JOIN NOW</Button>
        </div>
        <div className='intro-img  w-[50%] pr-[70px]'>
          <img src={discordImg} alt="intro-img" />
        </div>
      </div>
      <div className='escape flex flex-col items-center justify-center '>
        <div className='text-[12px] text-[#7f4db2] '>
          THE WAY TO
        </div>
        <div className='text-[53px] text-[#c471f5] font-bold '>
          ESCAPE THE MATRIX
        </div>
        <div className='w-[50%]' >
          {escapeData.map((data) => {
            return (
              <EscapeStep header={data.header} body={data.body} className="p-2.5;" />
            )
          })}
        </div>
      </div>
    </div >
  )
}

export default Home
