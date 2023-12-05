import projectOne from "../assets/project-1.png"
import projectTwo from "../assets/project-2.png"
import projectThree from "../assets/project-3.png"

const projects ={
    1: {
        title: "SoMe Platform",
        image: projectOne,
        description: (
            <>
               <p>
                Project description
                 
               </p>
            </>
        ),
        github: "https://github.com",
        demo: "http://netlify.com"
    },
    2: {
        title: "SoMe Platform",
        image: projectTwo,
        description: (
            <>
               <p>
               Project description
               </p>
            </>
        ),
        github: "https://github.com",
        demo: "http://netlify.com"
    },
    3: {
        title: "SoMe Platform",
        image: projectThree,
        description: (
            <>
               <p>
                Project description
               </p>
            </>
        ),
        github: "https://github.com",
        demo: "http://netlify.com"
    },
}

export default projects;