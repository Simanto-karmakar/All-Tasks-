function isBestFriend(manObj1, manObj2) {
    if ((manObj1.name === manObj2.friend) && (manObj2.name === manObj1.friend)) {
        return true;
    }
    else {
        return false;
    }
}

const bestFriend = isBestFriend({ name: "abul", friend: "babul" }, { name: "babul", friend: "abul" });
console.log(bestFriend);