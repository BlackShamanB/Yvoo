import React, { useState } from 'react';
import Image from 'next/image'; // Предполагается, что вы используете Next.js для загрузки изображений

const SafetyStandards = ({ image, check, color, title, content, items }) => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className={`flex flex-row gap-[30px] border-t-[6px] border-${color} pt-[40px]`}>
      <div>
        <Image
          src={`${image}`}
          width={100}
          height={100}
          alt="triangle"
          className=""
        />
      </div>
      <div className="flex flex-col gap-[50px]">
        <div className="">
          <div className={`text-[34px] leading-[42px] font-[700] text-${color}`}>
            {title}
          </div>
          <br />
          <div className="text-[24px] leading-[30px] font-[400] text-black">
            {content}
          </div>
        </div>
        <div className={`flex flex-col gap-[20px] collapse-block ${isCollapsed ? 'hidden' : ''}`}>
          {items.map((item, index) => (
            <div key={index} className="flex flex-row gap-[20px]">
              <div>
                <Image
                  src={check}
                  width={20}
                  height={20}
                  alt="check"
                  className=""
                />
              </div>
              <div>
                <div className="text-[16px] leading-[20px] font-[600] text-black">
                  {item.title}
                </div>
                <div className="text-[16px] leading-[20px] font-[400] text-black">
                  {item.description}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-row gap-[10px] items-center cursor-pointer" onClick={toggleCollapse}>
          <div className={`text-[16px] leading-[20px] font-[500] text-blue uppercase`}>
            {isCollapsed ? 'Click to reveal more' : 'Collapse'}
          </div>
          <div>
            <Image
              src="/icons/Arrow.svg"
              width={14}
              height={8}
              alt="Arrow"
              className={isCollapsed ? 'transform rotate-180' : ''}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SafetyStandards;