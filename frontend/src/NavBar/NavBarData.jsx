import React from 'react'
import { PiGreaterThanThin } from 'react-icons/pi'
import { RxExternalLink } from 'react-icons/rx'

export const NavBarData = [
    {
        title: 'OUR SCHOOLS',
        subNav: [
            {
                title: 'Jubliee Hills (Preschool)',
                icon: <PiGreaterThanThin className="mt-2.5 ml-5" />,
                subNav: [
                    {
                        title: "Head's Welcome",
                    },
                    {
                        title: "Curriculum & Grades",
                    },
                    {
                        title: "Campus",
                    },
                    {
                        title: "Enquire Now",
                        path: '/contact-us',
                        icon: <RxExternalLink className="mt-2.5 ml-5"/>
                    }
                ]
            },
            {
                title: 'Gachibowli Hills (Preschool)',
                icon: <PiGreaterThanThin className="mt-2.5 ml-5" />,
                subNav: [
                    {
                        title: "Head's Welcome",
                    },
                    {
                        title: "Curriculum & Grades",
                    },
                    {
                        title: "Campus",
                    },
                    {
                        title: "Enquire Now",
                        path: '/contact-us',
                        icon: <RxExternalLink className="mt-2.5 ml-5"/>
                    }
                ]
            },
            {
                title: 'Jubliee Hills (Preschool)',
                icon: <PiGreaterThanThin className="mt-2.5 ml-5" />,
                subNav: [
                    {
                        title: "Head's Welcome",
                    },
                    {
                        title: "Primary",
                    },
                    {
                        title: "Secondary",
                    },
                    {
                        title: "Senior Secondary",
                    },
                    {
                        title: "Campus",
                    },
                    {
                        title: "Enquire Now",
                        path: '/contact-us',
                        icon: <RxExternalLink className="mt-2.5 ml-5"/>
                    }
                ]
            },
            {
                title: 'Jubliee Hills (Preschool)',
                icon: <PiGreaterThanThin className="mt-2.5 ml-5" />,
                subNav: [
                    {
                        title: "Head's Welcome",
                    },
                    {
                        title: "Preschool",
                    },
                    {
                        title: "Primary",
                    },
                    {
                        title: "Secondary",
                    },
                    {
                        title: "Senior Secondary",
                    },
                    {
                        title: "Curriculum & Grades",
                    },
                    {
                        title: "Campus",
                    },
                    {
                        title: "Enquire Now",
                        path: '/contact-us',
                        icon: <RxExternalLink className="mt-2.5 ml-5"/>
                    }
                ]
            }
        ]
    }
]