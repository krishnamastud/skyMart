<div
                  key={item.id}
                  className="rounded-2xl border border-gray-200 bg-white p-4 transition hover:shadow-sm sm:p-5"
                >
                  <div className="flex gap-4">

                    {/* Product Image */}
                    <Link
                      to={`/main/product/${item.id}`}
                      className="flex h-24 w-24 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-gray-50 sm:h-28 sm:w-28"
                    >
                      <img
                        src={item.thumbnail || item.images?.[0]}
                        alt={item.title}
                        className="h-full w-full object-contain p-2"
                      />
                    </Link>

                    {/* Product Information */}
                    <div className="min-w-0 flex-1">

                      <div className="flex items-start justify-between gap-3">

                        <div className="min-w-0">

                          <p className="text-[11px] font-medium capitalize text-indigo-600">
                            {item.category}
                          </p>

                          <Link
                            to={`/main/product/${item.id}`}
                            className="mt-1 block truncate text-sm font-semibold text-gray-900 transition hover:text-indigo-600 sm:text-base"
                          >
                            {item.title}
                          </Link>

                          <p className="mt-1 text-sm font-semibold text-gray-700">
                            ${item.price.toFixed(2)}
                          </p>

                        </div>

                        {/* Remove */}
                        <button
                          type="button"
                          onClick={() =>
                            removeFromCart(item.id)
                          }
                          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-gray-400 transition hover:bg-red-50 hover:text-red-500"
                          title="Remove item"
                        >
                          <Trash2 size={17} />
                        </button>

                      </div>

                      {/* Bottom */}
                      <div className="mt-4 flex items-center justify-between">

                        {/* Quantity */}
                        <div className="flex items-center rounded-lg border border-gray-200">

                          <button
                            type="button"
                            onClick={() =>
                              decreaseQuantity(item.id)
                            }
                            className="flex h-8 w-8 items-center justify-center text-gray-500 transition hover:bg-gray-50 hover:text-indigo-600"
                          >
                            <Minus size={14} />
                          </button>

                          <span className="flex h-8 min-w-8 items-center justify-center border-x border-gray-200 text-xs font-semibold text-gray-800">
                            {item.quantity}
                          </span>

                          <button
                            type="button"
                            onClick={() =>
                              increaseQuantity(item.id)
                            }
                            className="flex h-8 w-8 items-center justify-center text-gray-500 transition hover:bg-gray-50 hover:text-indigo-600"
                          >
                            <Plus size={14} />
                          </button>

                        </div>

                        {/* Item Total */}
                        <div className="text-right">
                          <p className="text-[10px] text-gray-400">
                            Subtotal
                          </p>

                          <p className="text-sm font-bold text-gray-900">
                            ${itemTotal.toFixed(2)}
                          </p>
                        </div>

                      </div>

                    </div>

                  </div>
                </div>