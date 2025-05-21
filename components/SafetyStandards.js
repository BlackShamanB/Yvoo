import React, { useState } from 'react';
import Image from 'next/image'; // Предполагается, что вы используете Next.js для загрузки изображений

const SafetyStandards = ({ image, check, color, title, content, items }) => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className={`flex md:flex-row flex-col md:gap-[30px] gap-[15px] border-t-[6px] border-${color} md:pt-[40px] pt-[20px] pr-[40px]`}>
      <div>
        <Image
          src={`${image}`}
          width={100}
          height={100}
          alt="triangle"
          className="md:max-w-[100px] max-w-[78px]"
        />
      </div>
      <div className="flex flex-col md:gap-[50px] gap-[30px]">
        <div className="">
          <div className={`md:text-[34px] text-[24px] md:leading-[42px] leading-[32px] font-[700] text-${color} md:mb-[36px] mb-[26px]`}>
            {title}
          </div>
          <div className="md:text-[24px] text-[18px] md:leading-[30px] leading-[26px] font-[400] text-black">
            {content}
          </div>
        </div>
        <div className={`flex flex-col gap-[20px] collapse-block ${isCollapsed ? 'hidden' : ''}`}>
          {items.map((item, index) => (
            <div key={index} className="flex flex-row gap-[9px]">
              <div>
                <Image
                  src={check}
                  width={20}
                  height={20}
                  alt="check"
                  className="min-w-[20px] min-h-[20px]"
                />
              </div>
              <div>
                <div className="md:text-[16px] text-[14px] md:leading-[20px] leading-[18px] font-[600] text-black">
                  {item.title}
                </div>
                <div className="md:text-[16px] text-[14px] md:leading-[20px] leading-[18px] font-[400] text-black">
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