/**
 * Creates 'Observer'.
 * adds objects who needs updates.
 * notify the objects that are subscribed for updates.
 * @author Sachin Patil (sachinpatil_mca@yahoo.in)
 */

class Observer
    {
 /**
 * Creates an instance of Observer.
 *
 * @constructor
 * @this {Observer}
 */
        constructor()
        {
            this.observers=[]
        }

/**
 * this method adds subscribers for updates
 *
 * @this {Observer}
 * @param {subscriber} object who will get update.
 */
        subscribe(subscriber) 
        {
            this.observers.push(subscriber)
        }
        
/**
 * this method notify subscribers for updates
 *
 * @this {Observer}
 * @param {currencyArray} data to be update.
 */

        notifyObserver(currencyArray)
        {
            for (let i=0;i<this.observers.length;i++)
            {
                this.observers[i].render(currencyArray)
            }
        }
    }

 /**
 * @exports exports this module
 */
module.exports = Observer;