import Image from "next/image";
import MagnifyOnScroll from "../MagnifyOnScroll";
import ImgLeftToRight from "../ImgLeftToRight";

function Results({ handleModal }) {
  return (
    <div className="relative grid w-full bg-white text-black inset-0 3xl:pt-[240px] pb-[351px] min-h-[1679px] bg-evaluationReportBreakdownBG bg-no-repeat bg-size-[1018px_1099px] bg-[bottom_right]">
      <div className="3xl:max-w-[1516px] 2xl:max-w-[1116px] md:max-w-[598px] mx-[auto] is-inview grid grid-cols-1 2xl:grid-cols-2 w-full">
        <div className="flex flex-col gap-[42px]">
          <div className="text-blue font-[700] text-[50px] leading-[58px]">
            Evaluation Report Breakdown
          </div>
          <div className="font-[400] text-[20px] leading-[28px]">
            How <span className="font-[700]">YVOO ScanPro+</span> evaluates
            suppliers using a structured,
            <br /> AI-powered audit.
          </div>
          <div className="font-[700] text-[24px] leading-[30px]">
            Key Performance Categories 
          </div>
          <div className="bg-[#86F6FC] p-[30px_41px_42px_74px] rounded-[30px] flex flex-col gap-[30px] mr-[73px]">
            <div className="flex flex-row items-start ml-[-34px]">
              <Image
                src="/icons/minusBlack.svg"
                width={19}
                height={1}
                alt="triangle"
                className="mt-[18px] mr-[15px]"
              />
              <div className="font-[700] text-[30px] leading-[38px]">
                Operational Excellence & Production Readiness
              </div>
            </div>
            <div className="flex flex-col gap-[20px]">
              <div className="flex flex-row items-start">
                <Image
                  src="/icons/checkTiffany.svg"
                  width={20}
                  height={20}
                  alt="triangle"
                  className="mr-[10px]"
                />
                <div className="flex flex-col">
                  <div className="font-[600] text-[16px] leading-[20px]">
                    5S Implementation
                  </div>
                  <div className="font-[400] 2xl:text-[16px] md:text-[20px] text-[18px] 2xl:leading-[20px] md:leading-[26px] leading-[26px]">
                    Sort, Set in Order, Shine, Standardize, Sustain
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-start">
                <Image
                  src="/icons/checkTiffany.svg"
                  width={20}
                  height={20}
                  alt="triangle"
                  className="mr-[10px]"
                />
                <div className="flex flex-col">
                  <div className="font-[600] text-[16px] leading-[20px]">
                    Visual Management
                  </div>
                  <div className="font-[400] 2xl:text-[16px] md:text-[20px] text-[18px] 2xl:leading-[20px] md:leading-[26px] leading-[26px]">
                    Clear status display, marked stock locations
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-start">
                <Image
                  src="/icons/checkTiffany.svg"
                  width={20}
                  height={20}
                  alt="triangle"
                  className="mr-[10px]"
                />
                <div className="flex flex-col">
                  <div className="font-[600] text-[16px] leading-[20px]">
                    Standardized Workflows
                  </div>
                  <div className="font-[400] 2xl:text-[16px] md:text-[20px] text-[18px] 2xl:leading-[20px] md:leading-[26px] leading-[26px]">
                    Operators following defined instructions
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-start">
                <Image
                  src="/icons/checkTiffany.svg"
                  width={20}
                  height={20}
                  alt="triangle"
                  className="mr-[10px]"
                />
                <div className="flex flex-col">
                  <div className="font-[600] text-[16px] leading-[20px]">
                    Inventory & Stock Management
                  </div>
                  <div className="font-[400] 2xl:text-[16px] md:text-[20px] text-[18px] 2xl:leading-[20px] md:leading-[26px] leading-[26px]">
                    FIFO, Min/Max levels clearly defined
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-start">
                <Image
                  src="/icons/checkTiffany.svg"
                  width={20}
                  height={20}
                  alt="triangle"
                  className="mr-[10px]"
                />
                <div className="flex flex-col">
                  <div className="font-[600] text-[16px] leading-[20px]">
                    Total Productive Maintenance (TPM)
                  </div>
                  <div className="font-[400] 2xl:text-[16px] md:text-[20px] text-[18px] 2xl:leading-[20px] md:leading-[26px] leading-[26px]">
                    Machine upkeep, OEE monitoring
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-start">
                <Image
                  src="/icons/checkTiffany.svg"
                  width={20}
                  height={20}
                  alt="triangle"
                  className="mr-[10px]"
                />
                <div className="flex flex-col">
                  <div className="font-[600] text-[16px] leading-[20px]">
                    Line Design & Factory Layout
                  </div>
                  <div className="font-[400] 2xl:text-[16px] md:text-[20px] text-[18px] 2xl:leading-[20px] md:leading-[26px] leading-[26px]">
                    Process flow, production optimization
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-start">
                <Image
                  src="/icons/checkTiffany.svg"
                  width={20}
                  height={20}
                  alt="triangle"
                  className="mr-[10px]"
                />
                <div className="flex flex-col">
                  <div className="font-[600] text-[16px] leading-[20px]">
                    Cycle Time & Synchronized Processes
                  </div>
                  <div className="font-[400] 2xl:text-[16px] md:text-[20px] text-[18px] 2xl:leading-[20px] md:leading-[26px] leading-[26px]">
                    Lean workflow structure
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row align-center pl-[40px]">
            <Image
              src="/icons/plusBlue.svg"
              width={19}
              height={19}
              alt="triangle"
              className="mr-[15px]"
            />
            <div className="font-[500] text-[30px] leading-[38px]">
              Compliance & Risk Management
            </div>
          </div>
          <div className="flex flex-row align-center pl-[40px]">
            <Image
              src="/icons/plusBlue.svg"
              width={19}
              height={19}
              alt="triangle"
              className="mr-[15px]"
            />
            <div className="font-[500] text-[30px] leading-[38px]">
              Manufacturing & Process Efficiency
            </div>
          </div>
          <div className="flex flex-row align-center pl-[40px]">
            <Image
              src="/icons/plusBlue.svg"
              width={19}
              height={19}
              alt="triangle"
              className="mr-[15px]"
            />
            <div className="font-[500] text-[30px] leading-[38px]">
              Strategic & Organizational Strength
            </div>
          </div>
        </div>
        <div>
          <Image
            src="/icons/G2.svg"
            width={438}
            height={438}
            alt="triangle"
            className="ml-[auto]"
          />
          <Image
            src="/icons/G1.svg"
            width={552}
            height={386}
            alt="triangle"
            className="mr-[10px]"
          />
        </div>
      </div>
    </div>
  );
}

export default Results;
