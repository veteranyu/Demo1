// Import utilities
import JRes from '../util/JResponse'
import Helpers from '../util/Helpers'
import SendError from '../util/SendError'

// Import node modules
import randomstring from 'randomstring'

// Import database
import db from '../config/Knex'

export default class UrlController {
  /**
   * Method for creating a new product
   * @param ctx - The current request context
   * @param next - The next state to transition to
   */
  static async create(ctx, next) {
    const product = ctx.request.body

    console.log('product.name-----------------'+product.name);
    if (!product.name) {
      return SendError(ctx, 400, 'Please provide a URL!')
    }

    // Generate random string if no description provided
    if (!product.description) {
      product.description = randomstring.generate(10)
    }


    // Insert URL
    const name = await db('products').insert(product)
    if (!name) {
      return SendError(ctx, 400, 'Failed to add product!', name)
    }

    // Send response
    ctx.body = JRes.success('Successfully add!', {
      name: 'http://' + ctx.host + '/' + product.description
    })
  }

  static async query(ctx, next) {
	    const product = ctx.request.body

	    console.log('product.dn-----------------'+product.dn);
	 // Send response
	    ctx.body = JRes.success('Successfully shortened URL!', {
	      name: 'http://' + ctx.host + '/' + product.description
	    })
  }
  /**
   * Method for redirecting to name
   * @param ctx - The current request context
   * @param next - The next state to transition to
   */
  static async goTo(ctx, next) {
    const description = ctx.params.description
    let name = null

    console.log('description-----------------'+description);
    try {
      name = await db('products').where('description', description).first()
    } catch (err) {
      return SendError(ctx, 400, 'This shortened URL does not exist!')
    }

    ctx.redirect(name.name)
  }
}
