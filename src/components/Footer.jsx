import { Public, School, Work } from "@mui/icons-material";
import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-blue-700 text-white mt-10">
      <section className="w-[90%] md:w-[85%] mx-auto py-16 grid md:grid-cols-2 gap-12">

        {/* LEFT SIDE */}
        <div className="space-y-6">
          <img src="https://static.vecteezy.com/system/resources/thumbnails/050/001/482/small/digital-wallet-e-wallet-online-payment-by-digital-wallet-mobile-banking-money-transaction-e-commerce-circuit-board-background-wireframe-hand-touching-digital-interface-vector.jpg" className="w-full max-h-[300px] object-cover rounded-2xl" alt="" />

          <p className="text-2xl md:text-3xl font-semibold leading-snug text-gray-100">
            Navigate complexity with a trusted capital markets services
            partner at your side
          </p>

          <p className="text-sm text-gray-300 max-w-md">
            We help individuals and businesses unlock global opportunities
            through smart financial solutions, international partnerships,
            and secure cross-border transactions.
          </p>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex-1 space-y-10">

          {/* ITEM 1 */}
          <div className="flex gap-4">
            <span className="w-[50px] h-[50px] rounded-full px-2 bg-white/50 flex items-center justify-center">
              <Public fontSize="medium" />
            </span>
            <div>
              <h3 className="font-bold uppercase text-sm tracking-wide">
                International Work & Investment
              </h3>
              <p className="text-gray-300 text-md mt-1 leading-relaxed">
                Access global career paths and investment options, from growing your
                professional journey to positioning your finances in stable,
                high-performing economies worldwide.
              </p>
            </div>
          </div>

          {/* ITEM 2 */}
          <div className="flex gap-4">
            <span className="w-[50px] h-[50px] rounded-full px-2 bg-white/50 flex items-center justify-center">
              <School fontSize="medium" />
            </span>
            <div>
              <h3 className="font-bold uppercase text-sm tracking-wide">
                Study & Relocate Overseas
              </h3>
              <p className="text-gray-300 text-md mt-1 leading-relaxed">
                Move abroad with confidence, explore quality education options,
                relocation pathways, and the essential resources needed for a smooth
                and successful transition.
              </p>
            </div>
          </div>

          {/* ITEM 3 */}
          <div className="flex gap-4">
            <span className="w-[50px] h-[50px] rounded-full px-2 bg-white/50 flex items-center justify-center">
              <Work fontSize="medium" />
            </span>
            <div>
              <h3 className="font-bold uppercase text-sm tracking-wide">
                Cross-Border Business & Partnerships
              </h3>
              <p className="text-gray-300 text-md mt-1 leading-relaxed">
                Manage international transactions, oversee foreign investments, and
                form trusted partnerships through secure and efficient global
                financial systems.
              </p>
            </div>
          </div>

        </div>

      </section>

      {/* BOTTOM */}
      <section className="border-t border-white/10 py-6 text-center text-sm text-gray-300">
        © {new Date().getFullYear()} Sky High National Trust Bank. All rights reserved.
      </section>
    </footer>
  );
}

export default Footer;
