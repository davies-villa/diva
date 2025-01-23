import React from 'react'; 
import sefutravel from '../assets/sefutravel.png'; 
import tumabloggers from '../assets/tumabloggers.jpg'; 
import zambezigiants from '../assets/zambezigiants.png'; 
import elitewines from '../assets/elitewines.png';  

const Projects = () => { 
    const projects = [ 
        { id: 1, image: tumabloggers, title: 'TumaBloggers', link: '#' }, 
        { id: 2, image: sefutravel, title: 'Sefu Travel', link: '#' }, 
        { id: 3, image: zambezigiants, title: 'Zambezi Giants', link: '#' }, 
        { id: 4, image: elitewines, title: 'Elite Wines', link: '#' }, 
    ]; 

    return ( 
        <div className="flex flex-col  items-center"> 
            <h1 className="text-2xl font-bold font-poppins mb-8 text-center"> 
                Current <span className="text-purple-500"> Projects</span> 
            </h1> 
            {/* Projects Grid */} 
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full  px-6 lg:px-16 py-6"> 
                {projects.map((project) => ( 
                    <div 
                        key={project.id} 
                        className="relative group bg-white shadow-md rounded-lg overflow-hidden"
                    > 
                        {/* Image */} 
                        <img 
                            src={project.image} 
                            alt={project.title} 
                            className="w-full h-64 object-cover transition-transform duration-500 ease-in-out group-hover:scale-110 group-hover:translate-y-2 lg:group-hover:translate-y-0"
                        /> 
                        {/* Always Visible Text Overlay */} 
                        <div className="absolute inset-0 bg-black bg-opacity-50 text-white flex flex-col items-center justify-center">
                            <h2 className="text-xl font-semibold">{project.title}</h2>
                            <a 
                                href={project.link} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="mt-4 px-6 py-2 text-sm border rounded-full border-white text-white transition duration-300 ease-in-out lg:opacity-0 lg:group-hover:opacity-100 lg:group-hover:translate-y-0 transform lg:translate-y-3"
                            >
                                Learn More
                            </a>
                        </div> 
                    </div> 
                ))} 
            </div> 
        </div> 
    ); 
}; 

export default Projects;
