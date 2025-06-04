import Image from "next/image";

function AuditTable({ auditItems, dataBlocks }) {
  return (
    <div className="">
      {auditItems.map((audit, auditIndex) => (
        <div
          key={auditIndex}
          className="rounded-[30px] border border-color-[#EEF1F4] border-[2px] overflow-hidden mb-[40px]"
        >
          <div className="flex flex-row gap-[14px] items-center font-[700] text-[24px] leading-[30px] p-[20px] bg-[#F6F8F9] mb-[14px]">
            <Image src={audit.icon} alt={audit.alt} width="52" height="52" />
            <div className="text-black font-[700] text-[18px] leading-[26px]">
              <div className="text-blue">{audit.blueText}</div>
              {audit.blackText}
            </div>
          </div>

          <div className="">
            {dataBlocks.map((block, blockIndex) => {
              const isLastItem = blockIndex === dataBlocks.length - 1;
              return (
                <div
                  key={blockIndex}
                  className={`flex items-start pb-[20px] mx-[18px] ${
                    !isLastItem
                      ? "border-b-[#EEF1F4] border-b-[1px] mb-[21px]"
                      : ""
                  }`}
                >
                  <div className="text-blue w-[42%] font-[600] text-[12px] leading-[16px] pr-4">
                    {block.title}
                  </div>
                  <div className="w-[58%] text-black text-[14px] leading-[20px]">
                    {block.type === "image" ? (
                      <Image
                        src={block.items[auditIndex]}
                        alt="Check"
                        width={32}
                        height={32}
                      />
                    ) : block.isCurrency ? (
                      <span className="font-[600] text-[30px] leading-[34px]">
                        <span className="text-[#949CAF]">
                          {block.items[auditIndex] !== "Not included" && " €"}
                        </span>{" "}
                        {block.items[auditIndex]}
                      </span>
                    ) : (
                      block.items[auditIndex]
                    )}
                  </div>
                </div>
              );
            })}
            <div className="flex justify-center mt-[20px]">
              <button className="w-full bg-blue text-black font-[500] text-[16px] leading-[20px] p-[20px_120px] mx-[18px] mb-[18px] rounded-[30px] transition-colors">
                ORDER
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default AuditTable;
