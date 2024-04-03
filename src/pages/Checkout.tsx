import { Link } from "react-router-dom";
import Input from "../Components/Input";
import { useState } from "react";
import OthersNav from "../Components/OthersNav";
import {
  CHCHh,
  CHFOURTHd,
  CHH5,
  CHSd,
  CHTd,
  CHeiD,
  CHsevD,
  CHtd,
  ChFd,
  ChNineD,
  ChSIXd,
  Ched,
  ChfifthD,
  DHR,
  DL,
  DW,
} from "../Components/ClassName";

function Checkout() {
  const [isCash, setIsCash] = useState<boolean>(true);
  return (
    <div className="bg-[#F1F1F1] h-full">
      <div className={DW}>
        <OthersNav />
        <hr className={DHR} />
      </div>
      <div className="container">
        <Link to={"/"} className={DL}>
          Go Back
        </Link>
        <div className={ChFd}>
          <div className={CHSd}>
            <h1 className={CHCHh}>CHECKOUT</h1>
            <h5 className={CHH5}>billing details</h5>
            <div className={CHtd}>
              <div className={CHFOURTHd}>
                <Input
                  labelText="Name"
                  placeholder="Alexei Ward"
                  typeInput="text"
                />
              </div>
              <div className={ChfifthD}>
                <Input
                  labelText="Email Address"
                  placeholder="alex@gmail.com"
                  typeInput="email"
                />
              </div>
            </div>
            <div className={ChSIXd}>
              <Input
                labelText="Phone Number"
                placeholder="+998939448066"
                typeInput="number"
              />
            </div>
            <h5 className={CHH5}>shipping info</h5>
            <div className="mb-[24px]">
              <Input
                labelText="Address"
                placeholder="1137 Williams Avenue"
                typeInput="text"
              />
            </div>
            <div className={CHsevD}>
              <div className={CHeiD}>
                <Input
                  labelText="ZIP Code"
                  placeholder="10001"
                  typeInput="number"
                />
              </div>
              <div className={ChNineD}>
                <Input
                  labelText="City"
                  placeholder="New York"
                  typeInput="text"
                />
              </div>
            </div>
            <div className={CHTd}>
              <Input
                labelText="Country"
                placeholder="United States"
                typeInput="text"
              />
            </div>
            <h5 className={CHH5}>payment details</h5>
            <div className={Ched}>
              <p className="text-[12px] text-black font-bold leading-[16px]">
                Payment Method
              </p>
              <div className="w-full max-w-[309px]">
                <div className="mb-[16px] py-[18px] pl-[24px] border border-dark-brown rounded-xl pr-[15px] flex items-center gap-[16px]">
                  <input
                    className="text-[14px] font-bold leading-[19.12px] tracking-[-0.25px] text-opacity-50 accent-dark-brown"
                    type="radio"
                    id="contactChoice1"
                    name="contact"
                    value="email"
                    checked={isCash ? true : false}
                    onClick={() => setIsCash(true)}
                  />
                  <label
                    className="font-bold text-[14px] tracking-[-0.21px]"
                    htmlFor="contactChoice1"
                  >
                    e-Money
                  </label>
                </div>
                <div className="mb-[24px] py-[18px] pl-[24px] border border-dark-brown rounded-xl pr-[15px] flex items-center gap-[16px]">
                  <input
                    className="text-[14px] font-bold leading-[19.12px] tracking-[-0.25px] text-opacity-50 accent-dark-brown"
                    type="radio"
                    id="contactChoice1"
                    name="contact"
                    value="email"
                    onClick={() => setIsCash(false)}
                  />
                  <label
                    className="font-bold text-[14px] tracking-[-0.21px]"
                    htmlFor="contactChoice1"
                  >
                    Cash on Delivery
                  </label>
                </div>
              </div>
            </div>
            {isCash ? (
              <div className="flex items-center gap-[16px] 564:flex-col">
                <div className="grow 564:min-w-full mobile:w-[280px]">
                  <Input
                    labelText="e-Money Number"
                    placeholder="238521993"
                    typeInput="number"
                  />
                </div>

                <div className={ChNineD}>
                  <Input
                    labelText="e-Money PIN"
                    placeholder="6891"
                    typeInput="number"
                  />
                </div>
              </div>
            ) : (
              <div className="flex items-center gap-[32px] 564:flex-col 564:text-center">
                <img src="/cash.png" alt="cash" width={48} height={48} />
                <p className="text-[14px] opacity-50 leading-[25px] w-full max-w-[554px] tracking-[1px]">
                  The ‘Cash on Delivery’ option enables you to pay in cash when
                  our delivery courier arrives at your residence. Just make sure
                  your address is correct so that your order will not be
                  cancelled.
                </p>
              </div>
            )}
          </div>
          <div className="w-full max-w-[350px] 1172:max-w-full bg-white p-[32px] rounded-xl mt-[40px] 1172:mt-0 1172:p-[27px]">
            <h1 className="text-[18px] font-bold mb-[31px] tracking-[1.29px]">
              SUMMARY
            </h1>
            <div>
              <div className="flex items-center justify-between mb-[8px]">
                <p className="text-[15px] opacity-50">TOTAL</p>
                <span className="font-bold text-[18px]">$ 5,396</span>
              </div>
              <div className="flex items-center justify-between mb-[8px]">
                <p className="text-[15px] opacity-50">SHIPPING</p>
                <span className="font-bold text-[18px]">$ 50</span>
              </div>
              <div className="flex items-center justify-between mb-[24px]">
                <p className="text-[15px] opacity-50">VAT (INCLUDED)</p>
                <span className="font-bold text-[18px]">$ 1,079</span>
              </div>
              <div className="flex items-center justify-between mb-[32px]">
                <p className="text-[15px] opacity-50">GRAND TOTAL</p>
                <span className="font-bold text-[18px] text-dark-brown mt-[-8px]">
                  $ 5,446
                </span>
              </div>
              <button
                className="w-full bg-dark-brown py-[15px] text-center text-white font-semibold text-[13px] tracking-[1px] mb-[-5px] hover:bg-[#FBAF85]"
                onClick={() =>
                  document.getElementById("my_modal_2").showModal()
                }
              >
                CONTINUE & PAY
              </button>
              <dialog id="my_modal_2" className="modal">
                <div className="modal-box p-[48px] 432:p-[32px]">
                  <img
                    className="mb-[33px] 432:mb-[23px]"
                    src="/thankyou.png"
                    alt="thankyou"
                    width={64}
                    height={64}
                  />
                  <h2 className="font-bold text-[32px] tracking-[1.14px] mb-[24px] 432:text-[24px] 432:mb-[16px]">
                    THANK YOU <br />
                    FOR YOUR ORDER
                  </h2>
                  <p className="text-[15px] opacity-50 mb-[33px] 432:mb-[24px] w-full 432:max-w-[253px]">
                    You will receive an email confirmation shortly.
                  </p>
                  <div className="flex items-center mb-[46px] 432:flex-col">
                    <div className="p-[24px] bg-white-gray rounded-l-xl"></div>
                    <div className="text-white pt-[41px] pl-[32px] pb-[42px] pr-[65px] bg-black rounded-r-xl">
                      <h3 className="text-[15px] opacity-50 mb-[8px]">
                        GRAND TOTAL
                      </h3>
                    </div>
                  </div>
                  <Link to={"/"}>
                    <button className="w-full bg-dark-brown py-[15px] text-center text-white font-semibold text-[13px] tracking-[1px] mb-[-5px] hover:bg-[#FBAF85]">
                      BACK TO HOME
                    </button>
                  </Link>
                </div>
                <form method="dialog" className="modal-backdrop">
                  <button>close</button>
                </form>
              </dialog>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
