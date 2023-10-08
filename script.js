const serviceItems = document.getElementsByClassName('service-item');


for(let i=0; i<serviceItems.length; i++){
    let serviceItem = serviceItems[i];
    console.log(serviceItem)

    serviceItem.addEventListener('mouseenter',function(event){
        console.log('one');
        document.getElementsByClassName('service-item-bottom')[i].classList?.remove('service-item-botton-visible')
        document.getElementsByClassName('service-item-bottom')[i]?.classList?.add('service-item-botton-invisible')
    
    
        // service item description 
    
        document.getElementsByClassName('service-item-description')[i].classList.add('service-item-description-visible');
        document.getElementsByClassName('service-item-description')[i].classList.remove('service-item-description-invisible')
    
        document.getElementsByClassName('service-item-top')[i].classList.add('service-item-top-visible');
        document.getElementsByClassName('service-item-top')[i].classList.remove('service-item-top-invisible')
    })
    
    serviceItem.addEventListener('mouseleave',function(event){
        console.log('two');
        document.getElementsByClassName('service-item-bottom')[i].classList?.add('service-item-botton-visible')
        document.getElementsByClassName('service-item-bottom')[i]?.classList?.remove('service-item-botton-invisible')
    
    
            // service item description 
    
        document.getElementsByClassName('service-item-description')[i].classList.remove('service-item-description-visible');
        document.getElementsByClassName('service-item-description')[i].classList.add('service-item-description-invisible')
    
    
        document.getElementsByClassName('service-item-top')[i].classList.remove('service-item-top-visible');
        document.getElementsByClassName('service-item-top')[i].classList.add('service-item-top-invisible')
    })
}