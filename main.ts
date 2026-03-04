function createItems () {
    myShop = shop.initShop()
    ship_Interceptor = shop.createItem("interceptor", shop.SlotType.Ship, 10000, img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . 1 1 . . . . . . . 
        . . . . . . . 1 1 . . . . . . . 
        . . . . . . 1 1 1 1 . . . . . . 
        . . . . . 1 d 1 1 d 1 . . . . . 
        . . . . 1 d d 8 8 d d 1 . . . . 
        . . . 1 1 d 8 8 8 8 d 1 1 . . . 
        . . 1 d 1 d 8 8 8 8 d 1 d 1 . . 
        . 1 d d 1 d 8 8 8 8 d 1 d d 1 . 
        1 d d d 1 d 1 d d 1 d 1 d d d 1 
        1 d d d 1 d 1 d d 1 d 1 d d d 1 
        1 d d d 1 1 1 1 1 1 1 1 d d d 1 
        1 d d d 1 1 . 1 1 . 1 1 d d d 1 
        1 1 1 1 1 . . . . . . 1 1 d d 1 
        . 1 1 . . . . . . . . . . 1 1 . 
        . . . . . . . . . . . . . . . . 
        `)
    ship_figther = shop.createItem("fighter", shop.SlotType.Ship, 10000, img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . 1 1 . . . . . . . 
        . . . . . . 1 1 1 1 . . . . . . 
        . 1 1 1 . 1 1 1 1 1 1 . 1 1 1 . 
        1 d d d 1 d d 1 1 d d 1 d d d 1 
        1 d d d 1 d d 1 1 d d 1 d d d 1 
        1 d d d 1 d d 8 8 d d 1 d d d 1 
        1 1 1 1 1 d 8 8 8 8 d 1 1 1 1 1 
        1 d d d 1 d 8 8 8 8 d 1 d d d 1 
        1 d d d 1 d 8 8 8 8 d 1 d d d 1 
        1 d d d 1 d 1 d d 1 d 1 d d d 1 
        1 d d d 1 1 1 1 1 1 1 1 d d d 1 
        1 d d d 1 1 . 1 1 . 1 1 d d d 1 
        1 d d d 1 . . . . . . 1 d d d 1 
        1 1 1 1 1 . . . . . . 1 d d d 1 
        . 1 1 1 . . . . . . . . 1 1 1 . 
        `)
    ship_bomber = shop.createItem("bomber", shop.SlotType.Ship, 10000, img`
        . 1 1 1 . . . . . . . . 1 1 1 . 
        1 d d d 1 . . . . . . 1 d d d 1 
        1 d d d 1 . . . . . . 1 d d d 1 
        1 d d d 1 . . . . . . 1 d d d 1 
        1 1 1 1 1 . . 1 1 . . 1 1 1 1 1 
        1 d d d 1 . . 1 1 . . 1 d d d 1 
        1 d d d 1 . 1 1 1 1 . 1 d d d 1 
        1 d d d 1 1 d 1 1 d 1 1 d d d 1 
        1 d d d 1 d d 8 8 d d 1 d d d 1 
        1 1 1 1 1 d 8 8 8 8 d 1 1 1 1 1 
        1 d d d 1 d 8 8 8 8 d 1 d d d 1 
        1 1 1 1 1 d 8 8 8 8 d 1 1 1 1 1 
        . 1 1 1 1 d 1 d d 1 d 1 1 1 1 . 
        . . . . 1 d 1 d d 1 d 1 . . . . 
        . . . . . 1 1 1 1 1 1 . . . . . 
        . . . . . . . 1 1 . . . . . . . 
        `)
    shop.addItemToShopInventory(ship_figther, myShop)
    shop.addItemToShopInventory(ship_Interceptor, myShop)
    shop.addItemToShopInventory(ship_bomber, myShop)
}
let ship_bomber: shop.ItemDefinition = null
let ship_figther: shop.ItemDefinition = null
let ship_Interceptor: shop.ItemDefinition = null
let myShop: shop.Shop = null
createItems()
let myShopUI = shop.initShopUI([
shop.createSlot(shop.SlotType.Upgrade, 0, 0),
shop.createSlot(shop.SlotType.Upgrade, 0, 1),
shop.createSlot(shop.SlotType.Upgrade, 0, 2),
shop.createSlot(shop.SlotType.Upgrade, 0, 3),
shop.createSlot(shop.SlotType.Upgrade, 0, 4),
shop.createSlot(shop.SlotType.WeaponLeft, 1, 1),
shop.createSlot(shop.SlotType.Ship, 1, 2),
shop.createSlot(shop.SlotType.WeaponRight, 1, 3),
shop.createSlot(shop.SlotType.Defense, 2, 2)
])
shop.setShopOfUI(myShopUI, myShop)
shop.enableUIControl(myShopUI)
