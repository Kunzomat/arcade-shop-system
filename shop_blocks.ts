namespace SpriteKind {
    export const UI = SpriteKind.create()
}

namespace shop {

    //% block="create shopUI with $slots"
    //% blockSetVariable=myShopUI
    //% inlineInputMode=inline
    export function initShopUI(
        slots: ShopSlot[],
    ): ShopUI {

        return new shop.ShopUI(slots)
    }

    //% block="set shop of $ui to $shop"
    export function setShopOfUI(ui: ShopUI, shop: Shop) {
        ui.shop = shop
    }

    //% block="create shop"
    //% blockSetVariable=myShop
    //% inlineInputMode=inline
    export function initShop(
    ): Shop {
            return new shop.Shop()
    }

    //% block="create slot $type with $row rows and $col colums"
    //% inlineInputMode=inline
    export function createSlot(
        type: SlotType,
        row: number,
        col: number
    ): ShopSlot {
        return new ShopSlot(type, row, col)
    }

    //% block="create item $name type $type price $price icon $img"
    //% img.shadow=screen_image_picker
    //% blockSetVariable=myItem
    //% inlineInputMode=inline
    export function createItem(
        name: string,
        type: SlotType,
        price: number,
        img: Image
    ): ItemDefinition {
        return new ItemDefinition(name, type, img, price)
    }

    //% block="add $item to shop inventory $shop"
    //% inlineInputMode=inline
    export function addItemToShopInventory(
        item: ItemDefinition,
        shop: Shop
    ) {
        shop.inv.addItem(item)
    }

    let activeUI: ShopUI = null
    //% block="enable control for $ui"
    export function enableUIControl(ui: ShopUI) {

        activeUI = ui
        ui.enabled = true
        ui.state = UIState.SlotNavigation

        controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
            activeUI.move(-1, 0)
        })

        controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
            activeUI.move(1, 0)
        })

        controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
            activeUI.move(0, -1)
        })

        controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
            activeUI.move(0, 1)
        })

        controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
            activeUI.select()
        })

        controller.B.onEvent(ControllerButtonEvent.Pressed, function () {

            if (activeUI.state == UIState.ItemSelection) {
              //  activeUI.hideItemSelection()
                activeUI.state = UIState.SlotNavigation
            }
        })
        
    }
}