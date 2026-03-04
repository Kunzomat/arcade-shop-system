namespace shop {

    export enum UIState {
        SlotNavigation,
        ItemSelection
    } 
    
    export enum SlotType {
        Upgrade,
        WeaponLeft,
        Ship,
        WeaponRight,
        Defense
    }


    export class ItemDefinition {

        name: string
        slotType: SlotType
        image: Image
        price: number

        constructor(name: string, slotType: SlotType, img: Image, price: number) {
            this.name = name
            this.slotType = slotType
            this.image = img
            this.price = price
        }
    }
    
}