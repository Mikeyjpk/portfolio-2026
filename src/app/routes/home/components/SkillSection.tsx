import { useState } from "react";
import { motion } from "motion/react";
import reactIcon from "../../../../assets/icons/react-icon.svg";
import stackIcon from "../../../../assets/icons/stack-icon.svg";
import devOpsIcon from "../../../../assets/icons/devops-icon.svg";
import { FaRegArrowAltCircleRight, FaRegTimesCircle } from "react-icons/fa";

const skillCardsData = [
  {
    id: "1",
    icon: reactIcon,
    iconAltTag: "react icon",
    title: "Front-end Engineering",
    text: "Building intuitive, performant user interfaces using modern frameworks and component-based architecture. Focused on clean code, responsive layouts, accessibility, and refined user experience",
    dotPoints: [
      "React & Next.js application architecture",
      "TypeScript-first development",
      "Tailwind-based design systems",
    ],
  },
  {
    id: "2",
    icon: stackIcon,
    iconAltTag: "back-end stack icon",
    title: "Full-Stack Development",
    text: "Building end-to-end web applications across the client, server, and database layers. Focused on scalable architecture, secure data handling, and seamless integration between front-end interfaces and backend services.",
    dotPoints: [
      "Prisma ORM, Relational & NoSQL databases",
      "Authentication and session management",
      "Serverless functions and backend logic",
    ],
  },
  {
    id: "3",
    icon: devOpsIcon,
    iconAltTag: "DevOps gear icon",
    title: "DevOps & CI/CD",
    text: "Improving delivery speed and reliability through automated build, test, and deployment pipelines. Focused on repeatable workflows and version control best practices.",
    dotPoints: [
      "CI/CD pipelines with GitHub Actions & Bitbucket",
      "Automated deployments to Vercel/Netlify",
      "Git branching and code review practices",
    ],
  },
];

interface SkillCardProps {
  card: (typeof skillCardsData)[0];
  stage: number;
  onClick: () => void;
}

const SkillCard = ({ card, stage, onClick }: SkillCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const renderStageContent = () => {
    switch (stage) {
      // Inital Card Stage
      case 0:
        return (
          <div className="h-full flex flex-col items-center justify-center text-center gap-4">
            <motion.img
              key={`${card.id}-stage-2-to-0`}
              src={card.icon}
              alt={card.iconAltTag}
              className="w-20 h-20"
              initial={{ scale: 0.6, y: 20 }}
              animate={
                isHovered
                  ? {
                      scale: 1,
                      y: 0,
                      rotate: [-2, 2, -2],
                      x: [-2, 2, -2],
                      transition: {
                        scale: {
                          type: "spring",
                          stiffness: 300,
                          damping: 20,
                          duration: 0.4,
                        },
                        y: {
                          type: "spring",
                          stiffness: 300,
                          damping: 20,
                          duration: 0.4,
                        },
                        rotate: {
                          duration: 2.5,
                          repeat: Infinity,
                          repeatType: "reverse",
                          ease: "easeInOut",
                        },
                        x: {
                          duration: 2.5,
                          repeat: Infinity,
                          repeatType: "reverse",
                          ease: "easeInOut",
                        },
                      },
                    }
                  : { scale: 1, y: 0 }
              }
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 20,
                duration: 0.4,
              }}
            />
            <motion.p
              key={`${card.id}-title-stage-0`}
              className="text-title"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                delay: 0.3,
                duration: 0.8,
                ease: "easeOut",
              }}
            >
              {card.title}
            </motion.p>
          </div>
        );

      // Details stage: Icon + Title + Text
      case 1:
        return (
          <div className="h-full flex flex-col items-center text-center">
            <motion.img
              key={`${card.id}-stage-0-to-1`}
              src={card.icon}
              alt={card.iconAltTag}
              className="w-12 h-12"
              initial={{ scale: 1.6, y: -30 }}
              animate={{ scale: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 20,
                duration: 0.4,
              }}
            />
            <motion.p
              key={`${card.id}-text-stage-1`}
              className="text-body pt-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.2,
                duration: 0.6,
                ease: "easeOut",
              }}
            >
              {card.text}
            </motion.p>
          </div>
        );

      // Features stage: Icon + Title + Dot Points
      case 2:
        return (
          <div className="h-full flex flex-col items-center text-center">
            <img src={card.icon} alt={card.iconAltTag} className="w-12 h-12" />
            <motion.ul
              key={`${card.id}-dotpoints-stage-2`}
              className="text-body space-y-1 pt-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.2,
                duration: 0.6,
                ease: "easeOut",
              }}
            >
              {card.dotPoints.map((point, index) => (
                <li key={index} className="py-1">
                  <span className="mr-1">•</span>
                  <span>{point}</span>
                </li>
              ))}
            </motion.ul>
          </div>
        );

      default:
        return null;
    }
  };

  const getIcon = () => {
    return (
      <motion.div
        animate={{
          rotate: stage === 2 ? 180 : 0,
          scale: stage === 2 ? 1.05 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 20,
          duration: 0.3,
        }}
      >
        {stage === 2 ? (
          <FaRegTimesCircle size={24} />
        ) : (
          <FaRegArrowAltCircleRight size={24} />
        )}
      </motion.div>
    );
  };

  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="flex flex-col w-64 h-84 border-b-4 border-gray-200 p-6 transition-all duration-300 hover:cursor-pointer"
    >
      <div className="h-full">{renderStageContent()}</div>
      <div className="flex w-full items-center justify-center">{getIcon()}</div>
    </div>
  );
};

const SkillSection = () => {
  const [cardStages, setCardStages] = useState<Record<string, number>>({
    "1": 0,
    "2": 0,
    "3": 0,
  });

  const handleCardClick = (cardId: string) => {
    setCardStages((prev) => ({
      ...prev,
      [cardId]: prev[cardId] === 2 ? 0 : prev[cardId] + 1,
    }));
  };

  return (
    <div className="flex flex-col items-center gap-3">
      <div className="text-heading">FOCUS AREAS</div>
      <div className="flex flex-wrap justify-center gap-8 max-w-6xl select-none">
        {skillCardsData.map((card) => (
          <SkillCard
            key={card.id}
            card={card}
            stage={cardStages[card.id]}
            onClick={() => handleCardClick(card.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default SkillSection;
