"use client";
import React from 'react'
import Image from "next/image";

const ExploreButton = () => {
    return (
        <button type={"button"} id={"explore-btn"} className="mt-7 mx-auto">
            <a>
                Explore events
            </a>
        <Image src="/icons/arrow-down.svg" alt={""} width={24} height={24}/>
        </button>
    )
}
export default ExploreButton
