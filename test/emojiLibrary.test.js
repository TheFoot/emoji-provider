import { emojiLib } from '../lib/index.js'
import { smileysAndPeople } from '../lib/emojis/smileysAndPeople.js'
import { activity } from '../lib/emojis/activity.js'
import { animalsAndNature } from '../lib/emojis/animalsAndNature.js'
import { foodAndDrink } from '../lib/emojis/foodAndDrink.js'
import { objects } from '../lib/emojis/objects.js'
import { travelAndPlaces } from '../lib/emojis/travelAndPlaces.js'

const testGettingAllEmojisArray = [smileysAndPeople, animalsAndNature, foodAndDrink, activity, travelAndPlaces, objects].flat()
const testEmojisFromCategoriesArray = [smileysAndPeople, activity].flat()

describe('get emoji from tag', () => {
  test('tag happy-face should return 😀', () => {
    expect(emojiLib.getEmojiByTag('happy-face')).toBe('😀')
  })

  test('tag made-up-tag should throw an error', () => {
    expect(emojiLib.getEmojiByTag('made-up-tag')).toBe('Sorry, an emoji with given tag does not exist...')
  })
})

describe('replace emoticon in text with emoji', () => {
  test('replace emoticon with emoji', () => {
    expect(emojiLib.replaceEmoticonWithEmoji('Hej :D')).toBe('Hej 😃')
  })

  test('replace emoticon with emoji', () => {
    expect(emojiLib.replaceEmoticonWithEmoji('Hej :D :D :)')).toBe('Hej 😃 😃 😊')
  })

  test('replace emoticon with emoji', () => {
    expect(emojiLib.replaceEmoticonWithEmoji('Hej :G')).toBe('Hej :G')
  })
})

describe('get emojis that matches text', () => {
  test('get emojis that matches text', () => {
    expect(emojiLib.getEmojisThatMatchesText('sad')).toEqual(['😢', '😞', '😓', '😿'])
  })

  test('get emojis that matches text', () => {
    expect(emojiLib.getEmojisThatMatchesText('')).toEqual([])
  })
})

describe('get emojis from categories', () => {
  test('get emojis from categories', () => {
    expect(emojiLib.getEmojisAndTagsByCategory('smileysAndPeople', 'activity')).toEqual(testEmojisFromCategoriesArray)
  })

  test('get emojis', () => {
    /**
     * Wrapping function to test method throwing error.
     */
    function test () {
      emojiLib.getEmojisAndTagsByCategory('noneExistingCategory')
    }
    expect(test).toThrowError('The category named "noneExistingCategory" does not exist. Please provide a valid category.')
  })

  test('get all emojis', () => {
    expect(emojiLib.getAllEmojisAndTags()).toEqual(testGettingAllEmojisArray)
  })
})
