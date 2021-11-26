import mongoose from 'mongoose';
import slugGenerator from 'mongoose-slug-updater';
import removeMultiSpace from './plugins/remove-multi-space.js';

const brandSchema = mongoose.Schema(
  {
    _id: mongoose.Types.ObjectId,
    order: { type: Number, require: true },

    name: { type: String, trim: true, required: true },
    slug: { type: String, slug: "name", slugPaddingSize: 2, unique: true },
    desc: { type: String, trim: true, required: false },

    headQuarters: { type: String, trim: true, required: false },
    country: { type: String, trim: true, required: false },

    image: { type: String, trim: true, required: false },

    isHide: { type: Boolean, required: true, default: false },

    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', default: null },
    updatedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', default: null }
  },
  { timestamps: true, versionKey: false }
);

brandSchema.plugin(slugGenerator);
brandSchema.plugin(removeMultiSpace);

brandSchema.statics.generateOrder = async function () {
  const item = await this.findOne().select('order').sort('-order').lean().exec();
  if (item)
    return item.order + 1;
  return 1;
}

const brandModel = mongoose.model('Brand', brandSchema);
export default brandModel;