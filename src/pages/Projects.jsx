import React from 'react'
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ProjectCard from '../components/projects/ProjectCard'
import { ScrollTrigger } from 'gsap/all';


const Projects = () => {

  const projects = [{
    image1:'https://k72.ca/uploads/caseStudies/FRUITE/Fruite_thumbnail_bbq-1280x960.jpg',
    image2:'https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---Thumbnail-1280x960.jpg'
  },{
    image1:'https://k72.ca/uploads/caseStudies/LAMAJEURE_-_Son_sur_mesure/chalaxeur-thumbnail_img-1280x960.jpg',
    image2:'https://k72.ca/uploads/caseStudies/A_table/thumbnailimage_atable2-1280x960.jpg'
  },{
    image1:'https://k72.ca/uploads/caseStudies/COUP_FUMANT/CF_thumbnail-1280x960.jpg',
    image2:'https://k72.ca/uploads/caseStudies/CRISIS24/crisis24_behance_1920X1200_cartes-1280x960.jpg'
  },{
    image1:'https://k72.ca/uploads/blog/blogImg/50ff59cc0550df5b36543807a58db98c52e01a22274a317eafbfa5266941579b-640x290.png',
    image2:'https://k72.ca/uploads/caseStudies/OSM/thumbnail_OSM_1280-1280x960.jpg'
  },{
    image1: 'https://k72.ca/uploads/caseStudies/OKA/OKA_thumbnail-1280x960.jpg',
    image2:'https://k72.ca/uploads/caseStudies/Opto_Reseau_Brand/opto_thumbnail2-1280x960.jpg'
  }]

 gsap.registerPlugin(ScrollTrigger)

  useGSAP(function(){
    gsap.from('.hero',{
      height: '100px',
      stagger:{
        amount:0.4
      },
      scrollTrigger:{
        trigger:'.lol',
        start:'top 100%',
        end: 'top -150%',
        scrub:true
      }
    })
  })
  return (
    <div className='lg:p-4 p-2 mb-[100vh]'>
      <div className=' pt-[43vh]'>
        <h2 className='font-[font2] lg:text-[10vw] text-7xl uppercase'>Projets</h2>
      </div>
      <div className=' -lg:mt-20 lol'>
      {projects.map(function(elem,idx){
        return <div key={idx} className='hero w-full   h-[800px] flex gap-4 mb-4 '>
        <ProjectCard image1={elem.image1} image2={elem.image2}/>
        </div>
      })}
      </div>
    </div>
  )
}

export default Projects