//Basic Structure
// (function () {
//     //Declare private variables and functions in here
//     return {
//         //declare public var and functions
//     }
// })();
//Standard module pattern
const UICtrl = (function () {
    let text = 'This text is dynamically generated';
    const changeText = function () {
        const element = document.querySelector('.changeThis');
        element.textContent = text;
    }
    return {
        callChangeText: function () {
            changeText();
            console.log(text);
        }
    }
})();
UICtrl.callChangeText();
//Revealing Module Pattern
const ItemCtrl = (function () {
    let _data = [];
    function add(item) {
        _data.push(item);
        console.log('Item Added');
    }
    function get(id) {
        return _data.find(item => {
            return item.id === id;
        });
    }
    return {
        add: add,//revealing these to public basically
        get: get
    }
})();
ItemCtrl.add({ id: 1, name: 'Shubham' });
console.log(ItemCtrl.get(1));

//Singleton Pattern
const Singleton = (function () {
    let instance;

    function createInstance() {
        const object = new Object({ name: 'Brad' });
        return object;
    }
    return {
        getInstance: function () {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        }
    }
})();
const instanceA = Singleton.getInstance();
const instanceB = Singleton.getInstance();
console.log(instanceA === instanceB);
//Factory Pattern
function MemberFactory() {
    this.createMember = function (name, type) {
        let member;
        if (type === 'simple') {
            member = new SimpleMembership(name);
        } else if (type === 'standard') {
            member = new StandardMembership(name);
        } else if (type === 'super') {
            member = new SuperMembership(name);
        }
        member.type = type;
        member.define = function () {
            console.log(`${this.name} (${this.type}): ${this.cost}`);
        }
        return member;
    }
}
const SimpleMembership = function (name) {
    this.name = name;
    this.cost = '$5';
}
const StandardMembership = function (name) {
    this.name = name;
    this.cost = '$15';
}
const SuperMembership = function (name) {
    this.name = name;
    this.cost = '$25';
}
const members = [];
const factory = new MemberFactory();
members.push(factory.createMember('John Doe', 'simple'));
members.push(factory.createMember('Chris Jackson', 'super'));
members.push(factory.createMember('Janice Williams', 'simple'));
members.push(factory.createMember('Tom Smith', 'standard'));

members.forEach(function (member) {
    member.define();
});

