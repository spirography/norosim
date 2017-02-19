# norosim
Made for Dandyhacks 2017

In the vein of previous games like Pandemic, Pandemic 2, and Plague Inc, Norosim has the player act as a disease trying to infect everyone.  However, instead of trying to kill off all humans, Norosim has the player, as the Norovirus, attempt to infect every student at the University of Rochester in hopes of shutting down the school before the end of the semester.

#implementation

The game is written in vanilla JavaScript.  Some 3000 or so students at Rochester are simuated, with each student given a set of traits as well as a semester schedule of classes scraped from Rochester's CDCS website.  Students sleep during the night, attend classes during the day, and spend their free time as they see if (so athletic students would go to the gym fairly often, and more social students would attend more parties).  The goal is to exploit these behaviors in order to infect as many people as possible before the University notices: if a Norovirus crackdown cures everyone, you lose!