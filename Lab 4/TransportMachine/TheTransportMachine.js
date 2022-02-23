

// Global variables
{
    var topicNameToSubscriptionCallbackList = new Map([]);
}


function publishMessage(topicName, messageConent)
{
    console.log("Publication  topicName = " + topicName);
    if (topicNameToSubscriptionCallbackList.has(topicName))
    {
        var listOfCallbacks = topicNameToSubscriptionCallbackList.get(topicName);
        for (var i = 0; i < listOfCallbacks.length; i++) 
        {
            console.log("Callback getting called messageConent = " + messageConent);
            listOfCallbacks[i](messageConent);
        }
    }
}


function subscribeToTopic(topicName, subscriptionCallback)
{
    console.log("subscribeToTopic  topicName = " + topicName);
    if (topicNameToSubscriptionCallbackList.has(topicName))
    {
        topicNameToSubscriptionCallbackList.get(topicName).push(subscriptionCallback);
    }
    else
    {
        // This is a new topic.
        var subscriptionCallbackList = [];
        topicNameToSubscriptionCallbackList.set(topicName, subscriptionCallbackList);
        topicNameToSubscriptionCallbackList.get(topicName).push(subscriptionCallback);
    }
}