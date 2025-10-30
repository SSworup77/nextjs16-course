import React from 'react'
import ExploreButton from "@/components/ExploreButton";

const Page = () => {
    return (
            <section>
                <h1 className="text-center">The Hub for Every Dev<br/> Event YOU Cannot Miss</h1>
                <p className={`text-center mt-5`}>Hackathons, Meetups, and Conferences, All in One Place</p>
                <ExploreButton/>
                <div className="mt-20 space-y-7">
                    <h3>Featured Events</h3>
                    <ul className="events">
                        {[1,2,3,4,5].map((event)=>(
                            <li key={event}>Event {event}</li>
                        ))}
                    </ul>
                </div>
            </section>
    )
}
export default Page
