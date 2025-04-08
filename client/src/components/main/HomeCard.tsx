import {motion } from 'motion/react';
import { SectionButton } from './Button';

type HomeCardProps = {
    title: string,
    image?: string, 
    content: string
    id: number
}

export default function HomeCard({title, image, content, id}: HomeCardProps) {
  
    return (
        <>
        <motion.div 
            className="grid-container"
            initial={{ 
                opacity: 0,
                x: id % 2 === 0 ? 50 : -50
            }}
            whileInView={{
                opacity: 1,
                x: 0,
                transition: {
                    duration: 2
                }
            }}
            viewport={{ once: true }}
        >
            <h1 className="title">{title}</h1>
            <div className="grid-item">
                <img className="description-image" src={image} alt="" />
            </div>
            <div className="grid-item">
                <p>{content}</p>
                <SectionButton name="see more" />
            </div>
        </motion.div>
        </>
    )
}