var typed=new Typed(".text",{
    strings:["Frontend Developer" , "Backend Developer" , "Fullstack Developer"],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
})
function scrollToSection(Id)
{
    const section=document.getElementById(Id);
    if(section)
    {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}