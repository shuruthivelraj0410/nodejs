import event from 'events';

const eventEmitter = new event.EventEmitter()

eventEmitter.on('a',(data)=>{
console.log(data)
});
eventEmitter.on('b',(a,b)=>{
    console.log('sum',a+b)
})
const data = "abcdef"
eventEmitter.emit('a',data)

eventEmitter.emit('a',data)


eventEmitter.emit('a',data)

eventEmitter.emit('a',data)


eventEmitter.emit('a',data)

eventEmitter.emit('a',data)

//onClick(),onSubmit()


const func1 = ()=>{
   setTimeout(()=>{
    eventEmitter.emit('b',1,2)
   },5000) 
}

func1();