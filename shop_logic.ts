
namespace shop {

    export class Shop {
        inv: Inventory
        stock: Stock

        constructor() {

            this.inv = new shop.Inventory()
            this.stock = new shop.Stock()
        }
    }

    export class ShopSlot {

        type: SlotType
        equipped: ItemDefinition
        row: number
        col: number
        sprite: Sprite

        constructor(type: SlotType, row: number, col: number) {

            this.type = type
            this.row = row
            this.col = col
            this.equipped = null

            this.sprite = sprites.create(img`
                1 1 1 1 1 1 1 1
                1 1 . . . . . 1
                1 . 1 . . . . 1
                1 . . 1 . . . 1
                1 . . . 1 . . 1
                1 . . . . 1 . 1
                1 . . . . . 1 1
                1 1 1 1 1 1 1 1
            `, SpriteKind.UI)
            this.sprite.setFlag(SpriteFlag.RelativeToCamera, true)
        }

        equip(item: ItemDefinition) {
            if (item.slotType == this.type) {
                this.equipped = item
                this.sprite.setImage(item.image)
            }
        }
    }

    export class Stock {
        items: ItemDefinition[]

        constructor() {
            this.items = []
        }

        addItem(item: ItemDefinition) {
            this.items.push(item)
        }
    }

    export class Inventory {

        items: ItemDefinition[]

        constructor() {
            this.items = []
        }

        addItem(item: ItemDefinition) {
            this.items.push(item)
        }

        getItemsForSlot(type: SlotType): ItemDefinition[] {
            let result: ItemDefinition[] = []
            for (let i of this.items) {
                if (i.slotType == type) {
                    result.push(i)
                }
            }
            return result
        }
    }
}