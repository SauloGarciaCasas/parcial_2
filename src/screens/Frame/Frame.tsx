import React from "react";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";

export const Frame = (): JSX.Element => {
  return (
    <div className="bg-colorsyellow overflow-hidden w-full min-w-[346px] min-h-[588px] flex flex-col items-center relative">
      <img
        className="w-[250px] h-20 object-cover mt-1"
        alt="Gemini generated"
        src="/gemini-generated-image-b6sevtb6sevtb6se-1.png"
      />

      <div className="w-[190px] [font-family:'Inter',Helvetica] font-normal text-black text-xs text-center tracking-[0] leading-[normal] mt-3">
        <span className="font-semibold italic">
          Welcome to the official page of{" "}
        </span>
        <span className="font-bold italic">Carritos TOYS</span>
      </div>

      <div className="w-[217px] [font-family:'Inter',Helvetica] font-thin italic text-black text-xs text-center tracking-[0] leading-[normal] mt-[38px]">
        Please log into the page to continue
      </div>

      <div className="w-[209px] mt-[21px]">
        <Label className="[font-family:'Inter',Helvetica] font-normal text-black text-xs tracking-[0] leading-[normal] mb-2 block">
          E-mail:
        </Label>
        <Input
          type="email"
          placeholder="..."
          className="w-full h-[42px] bg-[#ffa3a3] rounded-xl shadow-[0px_4px_4px_#00000040] border-0 [font-family:'Inter',Helvetica] font-normal text-[#00000073] text-xs placeholder:text-[#00000073]"
        />
      </div>

      <div className="w-[209px] mt-[27px]">
        <Label className="[font-family:'Inter',Helvetica] font-normal text-black text-xs tracking-[0] leading-[normal] mb-2 block">
          Password:
        </Label>
        <Input
          type="password"
          placeholder="..."
          className="w-full h-[42px] bg-[#ffa3a3] rounded-xl shadow-[0px_4px_4px_#00000040] border-0 [font-family:'Inter',Helvetica] font-normal text-[#00000073] text-xs placeholder:text-[#00000073]"
        />
      </div>

      <div className="w-[134px] [font-family:'Inter',Helvetica] font-normal text-transparent text-xs tracking-[0] leading-[normal] whitespace-nowrap mt-[8px]">
        <span className="text-black">Forgot your </span>
        <span className="text-[#0021ff] cursor-pointer">Password</span>
        <span className="text-black">?</span>
      </div>

      <Button className="w-[228px] h-[49px] bg-[#bc1313] hover:bg-[#a01111] rounded-2xl shadow-[0px_4px_4px_#00000040,0px_4px_4px_#00000040] mt-[24px]">
        <span className="[font-family:'Inter',Helvetica] font-normal text-white text-xl tracking-[0] leading-[normal]">
          Login
        </span>
      </Button>

      <div className="[font-family:'Inter',Helvetica] font-semibold text-black text-2xl tracking-[0] leading-[normal] mt-[19px]">
        OR
      </div>

      <Button
        variant="secondary"
        className="w-[289px] h-[35px] bg-[#cccccc] hover:bg-[#bbbbbb] rounded-xl mt-[12px] flex items-center justify-start px-3 gap-3"
      >
        <img
          className="w-[22px] h-6 object-cover"
          alt="Google"
          src="/image-2.png"
        />
        <span className="[font-family:'Inter',Helvetica] font-black text-black text-[11px] tracking-[0] leading-[normal]">
          SIGN IN WITH GOOGLE
        </span>
      </Button>

      <Button
        variant="secondary"
        className="w-[289px] h-[35px] bg-black hover:bg-[#1a1a1a] rounded-xl mt-[23px] flex items-center justify-start px-3 gap-3"
      >
        <img
          className="w-[18px] h-[26px] object-cover"
          alt="Apple"
          src="/image-3.png"
        />
        <span className="[font-family:'Inter',Helvetica] font-black text-white text-[11px] tracking-[0] leading-[normal]">
          SIGN IN WITH APPLE
        </span>
      </Button>
    </div>
  );
};
