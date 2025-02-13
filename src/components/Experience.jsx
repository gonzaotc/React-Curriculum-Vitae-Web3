import React from 'react';
import Icon from '../containers/Icon';
import Section from '../containers/Section';

const Experience = ({
  data = { experience: { title: '', experiences: [{}, {}, {}] } },
}) => {
  return (
    <Section id="Experience" className="flex flex-col">
      <span className="flex items-center mb-3">
        <Icon name="Experience" className="mr-0.5 text-amber-800" />
        <h3 className="Experience-title">{data.experience.title}</h3>
      </span>
      <ul className="flex flex-col">
        {data.experience.experiences.map((experience, index) => (
          <li
            key={index}
            className="Experience-item mb-4 bg-active rounded py-5 px-4 flex"
          >
            {experience.image && (
              <img
                className="w-14 h-14 object-fit mr-3"
                src={experience.image}
                alt=""
              />
            )}
            <span className="max-w-[900px] text-neutral-200">
              <p className="text-lg font-semibold text-white">{experience.jobTitle}</p>
              <p className="text-lg ">{experience.company}</p>
              <p className="mb-1">
                {experience.startDate} - {experience.endDate}
              </p>
              <p>{experience.jobDescription}</p>
            </span>
          </li>
        ))}
      </ul>
    </Section>
  );
};

export default Experience;
